import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x68s73jbg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x68s73jbg"/>`,
		"fallback": "ix:success-multiple-filled",
	});
}

export default Component;
