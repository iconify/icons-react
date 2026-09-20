import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9_1y9bos.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9_1y9bos"/>`,
		"fallback": "streamline-flex:number-sign",
	});
}

export default Component;
