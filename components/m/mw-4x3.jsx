import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/n/noow99b6h.css';
import '../../css/v/vxci-bb6c.css';
import '../../css/c/c8caqzgai.css';
import '../../css/n/n6_3g1baq.css';
import '../../css/v/veb0yhysz.css';
import '../../css/a/apo48nn-i.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="noow99b6h"/><path class="vxci-bb6c"/><path class="c8caqzgai"/><path class="n6_3g1baq"/><path class="veb0yhysz"/><path class="apo48nn-i"/></g>`,
		"fallback": "flag:mw-4x3",
	});
}

export default Component;
