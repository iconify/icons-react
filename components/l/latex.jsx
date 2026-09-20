import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5wnjibna.css';
import '../../css/e/emjfvk0xz.css';
import '../../css/e/e9665qbwc.css';
import '../../css/x/x21x2pqay.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5wnjibna"/><path class="emjfvk0xz"/><path class="e9665qbwc"/><path class="x21x2pqay"/>`,
		"fallback": "selfhst:latex",
	});
}

export default Component;
