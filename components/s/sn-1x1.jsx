import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/x/xr-j7kydp.css';
import '../../css/y/y95_6vc2y.css';
import '../../css/h/hj-ppubbn.css';
import '../../css/u/ufqlivblt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="xr-j7kydp"/><path class="y95_6vc2y"/><path class="hj-ppubbn"/></g><path class="ufqlivblt"/>`,
		"fallback": "flag:sn-1x1",
	});
}

export default Component;
