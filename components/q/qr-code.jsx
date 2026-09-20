import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-mq4hbvd.css';
import '../../css/h/hpezqxb3w.css';
import '../../css/t/t4ha_ljbv.css';
import '../../css/k/kd328drbf.css';
import '../../css/v/vv0rgii1z.css';
import '../../css/h/h3lq2bcie.css';
import '../../css/x/xk1fuqbuc.css';
import '../../css/o/ofesumb5m.css';
import '../../css/t/taslaqbin.css';
import '../../css/l/leoad4bhw.css';
import '../../css/b/brrylwbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="h-mq4hbvd"/><rect class="hpezqxb3w"/><rect class="t4ha_ljbv"/><rect class="kd328drbf"/><rect class="vv0rgii1z"/><rect class="h3lq2bcie"/><rect class="xk1fuqbuc"/><rect class="ofesumb5m"/><rect class="taslaqbin"/><rect class="leoad4bhw"/><rect class="brrylwbtr"/></g>`,
		"fallback": "proicons:qr-code",
	});
}

export default Component;
