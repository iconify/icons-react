import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_qx102xn.css';
import '../../css/a/af-snzbpx.css';
import '../../css/p/pwqsqzlnz.css';
import '../../css/b/b3946q_wc.css';
import '../../css/h/hkgrx0t0m.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="modx-original-wordmark-st0 x_qx102xn"/><path class="af-snzbpx modx-original-wordmark-st2"/><path class="modx-original-wordmark-st3 pwqsqzlnz"/><path class="b3946q_wc modx-original-wordmark-st4"/><path class="hkgrx0t0m"/>`,
		"fallback": "devicon:modx-wordmark",
	});
}

export default Component;
