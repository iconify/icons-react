import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m07t8yn0i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m07t8yn0i"/>`,
		"fallback": "pinhead:seaplane",
	});
}

export default Component;
