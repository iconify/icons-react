import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbv8mfbkk.css';
import '../../css/i/iutm0rqkj.css';
import '../../css/b/bxz985ukn.css';
import '../../css/n/n6j6ubcfv.css';
import '../../css/u/uqni7cc0m.css';
import '../../css/o/od-f8saaq.css';
import '../../css/g/g_uzu0bds.css';
import '../../css/g/g4ddmepwk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGTcZhpbZt" x1="7.621" x2="61.248" y1="64.719" y2="39.856" gradientTransform="translate(.002)scale(1.99992)" gradientUnits="userSpaceOnUse"><stop offset=".1" class="fbv8mfbkk"/><stop offset=".59" class="iutm0rqkj"/></linearGradient><linearGradient id="SVG6ByHre2g" x1="60.019" x2="1.313" y1="59.778" y2="1.072" gradientTransform="translate(.002)scale(1.99992)" gradientUnits="userSpaceOnUse"><stop offset=".3" class="iutm0rqkj"/><stop offset=".7" class="bxz985ukn"/></linearGradient></defs><path class="n6j6ubcfv"/><path fill="url(#SVGTcZhpbZt)" class="uqni7cc0m"/><path fill="url(#SVG6ByHre2g)" class="od-f8saaq"/><path class="g_uzu0bds"/><path class="g4ddmepwk"/>`,
		"fallback": "devicon:pycharm",
	});
}

export default Component;
