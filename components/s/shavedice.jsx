import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1b_vxb4x.css';
import '../../css/p/pi70sim3y.css';
import '../../css/p/p2p33kbxn.css';
import '../../css/i/i1hav5b8i.css';
import '../../css/v/vac2shbsn.css';
import '../../css/m/mib18zbgt.css';
import '../../css/h/h-eu_ibol.css';
import '../../css/s/sh0plcc0b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1b_vxb4x"/><path class="pi70sim3y"/><path class="p2p33kbxn"/><path class="i1hav5b8i"/><path class="vac2shbsn"/><path class="mib18zbgt"/><path class="h-eu_ibol"/><path class="sh0plcc0b"/>`,
		"fallback": "fxemoji:shavedice",
	});
}

export default Component;
