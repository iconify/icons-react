import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjyssp3-y.css';
import '../../css/v/vq15xlb0p.css';
import '../../css/u/urk6-bcpf.css';
import '../../css/a/at07ckjrt.css';
import '../../css/s/svcfaibbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yjyssp3-y"/><circle class="vq15xlb0p"/><circle class="urk6-bcpf"/><circle class="at07ckjrt"/><path class="svcfaibbd"/></g>`,
		"fallback": "evicons:plug-nacs",
	});
}

export default Component;
