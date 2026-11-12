import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_8idg_ua.css';
import '../../css/p/p8d0bpxvc.css';
import '../../css/o/ocxmj-0eu.css';
import '../../css/m/mibif0bdg.css';
import '../../css/a/adq4yggtd.css';
import '../../css/k/kg3tgdbnz.css';
import '../../css/g/g8903tb9f.css';
import '../../css/q/q3h1-ibjp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_8idg_ua"/><path class="p8d0bpxvc"/><path class="ocxmj-0eu"/><path class="mibif0bdg"/><path class="adq4yggtd"/><path class="kg3tgdbnz"/><path class="g8903tb9f"/><path class="q3h1-ibjp"/>`,
		"fallback": "selfhst:oracle-apex-dark",
	});
}

export default Component;
