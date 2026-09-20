import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exb_8omph.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="exb_8omph"/>`,
		"fallback": "streamline-flex:surveillance-camera-solid",
	});
}

export default Component;
