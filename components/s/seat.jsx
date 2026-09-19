import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvhlot_su.css';
import '../../css/z/zzboz8bkr.css';
import '../../css/q/qir125p1g.css';
import '../../css/e/e53arwbrt.css';
import '../../css/l/ls3pf9fxa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvhlot_su"/><path class="zzboz8bkr"/><path class="qir125p1g"/><path class="e53arwbrt"/><path class="ls3pf9fxa"/>`,
		"fallback": "fxemoji:seat",
	});
}

export default Component;
