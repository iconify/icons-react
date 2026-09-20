import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8yyz4_qr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k8yyz4_qr"/>`,
		"fallback": "streamline-flex-color:link-chain-flat",
	});
}

export default Component;
