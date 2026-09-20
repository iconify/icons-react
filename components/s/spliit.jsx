import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_ouqjbhv.css';
import '../../css/m/muz2rozsj.css';
import '../../css/e/ev3qi2b7f.css';
import '../../css/g/gv6ecc1pd.css';
import '../../css/i/icrzkx3ig.css';
import '../../css/d/dez2m3t1q.css';
import '../../css/e/ea6zeibni.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_ouqjbhv"/><path class="muz2rozsj"/><path class="ev3qi2b7f"/><path class="gv6ecc1pd"/><path class="icrzkx3ig"/><path class="dez2m3t1q"/><circle class="ea6zeibni"/>`,
		"fallback": "selfhst:spliit",
	});
}

export default Component;
