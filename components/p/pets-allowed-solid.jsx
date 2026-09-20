import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4x_hls7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4x_hls7r"/>`,
		"fallback": "streamline:pets-allowed-solid",
	});
}

export default Component;
