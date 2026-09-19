import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tu6fmmbhh.css';
import '../../css/n/nij7g-byp.css';
import '../../css/b/b538osbcz.css';
import '../../css/b/b6mgyu3-v.css';
import '../../css/c/ccife_b9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tu6fmmbhh"/><path class="nij7g-byp"/><path class="b538osbcz"/><path class="b6mgyu3-v"/><path class="ccife_b9p"/>`,
		"fallback": "fxemoji:waterbuffalo",
	});
}

export default Component;
