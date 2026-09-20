import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0q8vobjd.css';
import '../../css/t/tawzj5bog.css';
import '../../css/v/v98907jch.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0q8vobjd"/><path class="tawzj5bog"/><path class="v98907jch"/></g>`,
		"fallback": "streamline-color:login-1",
	});
}

export default Component;
