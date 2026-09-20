import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chsjt2b1x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chsjt2b1x"/>`,
		"fallback": "teenyicons:paragraph-outline",
	});
}

export default Component;
