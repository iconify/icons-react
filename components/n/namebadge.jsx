import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmx8ijb7m.css';
import '../../css/i/ibya-7rop.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmx8ijb7m"/><path class="ibya-7rop"/>`,
		"fallback": "fxemoji:namebadge",
	});
}

export default Component;
