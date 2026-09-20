import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g44uy_bjc.css';
import '../../css/k/kjgm23o3b.css';
import '../../css/m/maptswbqy.css';
import '../../css/p/p599o3h7x.css';
import '../../css/t/t1tln_bqb.css';
import '../../css/c/cx0g5kprr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g44uy_bjc"/><circle class="kjgm23o3b"/><path class="maptswbqy"/><circle class="p599o3h7x"/><path class="t1tln_bqb"/><path class="cx0g5kprr"/>`,
		"fallback": "openmoji:scales",
	});
}

export default Component;
