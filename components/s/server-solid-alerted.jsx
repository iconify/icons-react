import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krgv52bvo.css';
import '../../css/i/it0_k2res.css';
import '../../css/j/jytmtkbfu.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--alerted clr-i-solid-path-1--alerted krgv52bvo"/><circle class="clr-i-solid--alerted clr-i-solid-path-2--alerted it0_k2res"/><path class="clr-i-alert clr-i-solid--alerted clr-i-solid-path-3--alerted jytmtkbfu"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:server-solid-alerted",
	});
}

export default Component;
