import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-hw-5bzi.css';
import '../../css/m/mtxmfcb5x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-hw-5bzi"/><path class="mtxmfcb5x"/>`,
		"fallback": "selfhst:maildev-light",
	});
}

export default Component;
