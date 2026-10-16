import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojvto6arq.css';
import '../../css/p/pk8nyac2p.css';
import '../../css/u/u0yotwbap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojvto6arq"/><path class="pk8nyac2p"/><path class="u0yotwbap"/>`,
		"fallback": "energy-icons:settlement-20",
	});
}

export default Component;
