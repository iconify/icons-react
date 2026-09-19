import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqilpoclf.css';
import '../../css/k/k-gicyhal.css';
import '../../css/c/cbu4rlgab.css';
import '../../css/o/ob5gslbbn.css';
import '../../css/g/g1f57lbke.css';
import '../../css/c/c8r3h6ble.css';
import '../../css/w/wwj_lg1xg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqilpoclf"/><path class="k-gicyhal"/><g class="cbu4rlgab"><circle class="ob5gslbbn"/><circle class="g1f57lbke"/></g><path class="c8r3h6ble"/><path class="wwj_lg1xg"/>`,
		"fallback": "flat-color-icons:leave",
	});
}

export default Component;
