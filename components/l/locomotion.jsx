import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/w/wwyp7bchy.css';
import '../../css/y/ypboqwz6h.css';
import '../../css/l/l-u2ngb4w.css';
import '../../css/z/zvnoyho6r.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/u/unli-zbnu.css';
import '../../css/k/kp7jaqbeu.css';
import '../../css/b/bbbgubx3u.css';
import '../../css/o/oac4nqoyx.css';
import '../../css/u/umkurtyhl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><path class="wwyp7bchy"/><circle class="ypboqwz6h"/><path class="l-u2ngb4w"/><circle class="zvnoyho6r"/></g><g class="x8poo_bjf"><path class="unli-zbnu"/><circle class="kp7jaqbeu"/><path class="bbbgubx3u"/><circle class="oac4nqoyx"/><path class="umkurtyhl"/></g>`,
		"fallback": "openmoji:locomotion",
	});
}

export default Component;
