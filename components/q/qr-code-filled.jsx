import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzv543hpj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xzv543hpj"/>`,
		"fallback": "lsicon:qr-code-filled",
	});
}

export default Component;
