import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oubpnvbpe.css';
import '../../css/a/a96xavv0s.css';
import '../../css/p/p1rag-8mt.css';
import '../../css/n/nhroi0kik.css';
import '../../css/b/blq8cacjl.css';
import '../../css/m/mwkxbzc_b.css';
import '../../css/p/prwmfeb7x.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="oubpnvbpe"/><path class="a96xavv0s"/><g class="p1rag-8mt"><path class="nhroi0kik"/><path class="blq8cacjl"/><path class="mwkxbzc_b"/><circle class="prwmfeb7x"/></g>`,
		"fallback": "openmoji:transgender-symbol",
	});
}

export default Component;
