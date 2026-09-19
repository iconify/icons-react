import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8i3oywkn.css';
import '../../css/z/z21o3_b_m.css';
import '../../css/h/hto_s4t-i.css';
import '../../css/h/h_by37b5d.css';
import '../../css/r/r7k7tgbsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8i3oywkn"/><path class="z21o3_b_m"/><circle transform="rotate(-40.627 307.731 283.76)" class="hto_s4t-i"/><path class="h_by37b5d"/><path class="r7k7tgbsl"/>`,
		"fallback": "cil:pizza",
	});
}

export default Component;
