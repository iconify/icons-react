import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysk_kx6wv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ysk_kx6wv"/>`,
		"fallback": "streamline-flex:shield-cross-solid",
	});
}

export default Component;
