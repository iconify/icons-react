import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uuuk_76_k.css';
import '../../css/e/ejbnambnw.css';
import '../../css/r/rdkkb3etx.css';
import '../../css/n/nmtqstoyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uuuk_76_k"/><path class="ejbnambnw"/><path class="rdkkb3etx"/><path class="nmtqstoyv"/></g>`,
		"fallback": "keyline-icons:search-2-sparkles-duotone",
	});
}

export default Component;
