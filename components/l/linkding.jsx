import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpkx02bvu.css';
import '../../css/e/etynb-byp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qpkx02bvu"/><path class="etynb-byp"/>`,
		"fallback": "selfhst:linkding",
	});
}

export default Component;
