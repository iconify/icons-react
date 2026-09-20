import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s61wtolnf.css';
import '../../css/g/gw0rxtbgf.css';
import '../../css/u/u89algnwl.css';
import '../../css/q/qnv6w8b5v.css';
import '../../css/o/o_1k7bbpq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s61wtolnf"/><path class="gw0rxtbgf"/><path class="u89algnwl"/><path class="qnv6w8b5v"/><path class="o_1k7bbpq"/>`,
		"fallback": "openmoji:sled",
	});
}

export default Component;
