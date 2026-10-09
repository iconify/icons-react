import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3ul-itcf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3ul-itcf"/>`,
		"fallback": "energy-icons:uv-index-20",
	});
}

export default Component;
