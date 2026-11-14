import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un65ooazk.css';
import '../../css/w/wlb9i1ctt.css';
import '../../css/k/kpzxgnq_j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un65ooazk"/><path class="wlb9i1ctt"/><path class="kpzxgnq_j"/>`,
		"fallback": "selfhst:unimus-light",
	});
}

export default Component;
