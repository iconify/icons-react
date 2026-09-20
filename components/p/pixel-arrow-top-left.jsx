import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucluwrb2y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucluwrb2y"/>`,
		"fallback": "pinhead:pixel-arrow-top-left",
	});
}

export default Component;
