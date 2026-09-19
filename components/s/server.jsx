import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wobsqr1mq.css';
import '../../css/p/pw90w5qlp.css';
import '../../css/c/cwa6rzb2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wobsqr1mq"/><path class="pw90w5qlp"/><path class="cwa6rzb2r"/>`,
		"fallback": "famicons:server",
	});
}

export default Component;
