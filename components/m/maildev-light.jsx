import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_ogl0bpc.css';
import '../../css/m/mtxmfcb5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_ogl0bpc"/><path class="mtxmfcb5x"/>`,
		"fallback": "selfhst:maildev-light",
	});
}

export default Component;
