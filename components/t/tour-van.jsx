import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtzmx5fad.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtzmx5fad"/>`,
		"fallback": "pinhead:tour-van",
	});
}

export default Component;
