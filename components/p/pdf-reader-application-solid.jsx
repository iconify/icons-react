import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtz-oe5vk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qtz-oe5vk"/>`,
		"fallback": "streamline-flex:pdf-reader-application-solid",
	});
}

export default Component;
