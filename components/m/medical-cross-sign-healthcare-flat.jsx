import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr4dnob2p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tr4dnob2p"/>`,
		"fallback": "streamline-color:medical-cross-sign-healthcare-flat",
	});
}

export default Component;
