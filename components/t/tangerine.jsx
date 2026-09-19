import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fuzlowbon.css';
import '../../css/m/mrseh9rmw.css';
import '../../css/o/o0lf53bjy.css';
import '../../css/o/o80fjacmm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fuzlowbon"/><path class="mrseh9rmw"/><path class="o0lf53bjy"/><path class="o80fjacmm"/>`,
		"fallback": "fxemoji:tangerine",
	});
}

export default Component;
