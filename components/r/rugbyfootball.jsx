import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2bjk7byt.css';
import '../../css/c/c33hiv2aq.css';
import '../../css/s/srb0o_b6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2bjk7byt"/><path class="c33hiv2aq"/><path class="srb0o_b6b"/>`,
		"fallback": "fxemoji:rugbyfootball",
	});
}

export default Component;
