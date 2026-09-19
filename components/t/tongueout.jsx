import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/a/ayh_embfz.css';
import '../../css/e/e8dapdehd.css';
import '../../css/e/ew_mgwbmu.css';
import '../../css/b/bbwvg1low.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="ayh_embfz"/><path class="e8dapdehd"/><path class="ew_mgwbmu"/><path class="bbwvg1low"/>`,
		"fallback": "fxemoji:tongueout",
	});
}

export default Component;
