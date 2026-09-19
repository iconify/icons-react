import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/m/miusgdbpn.css';
import '../../css/d/dc8_s3fpx.css';
import '../../css/i/iw2ko0b_c.css';
import '../../css/a/al4wg93to.css';
import '../../css/b/bhalt8b_x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="miusgdbpn"/><path class="dc8_s3fpx"/><g class="iw2ko0b_c"><path class="al4wg93to"/><path class="bhalt8b_x"/></g></g>`,
		"fallback": "flag:to-1x1",
	});
}

export default Component;
