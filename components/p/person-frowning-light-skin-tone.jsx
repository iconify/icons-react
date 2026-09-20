import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-n85ffv.css';
import '../../css/f/fq_sq5zvb.css';
import '../../css/d/d9nqfb0cx.css';
import '../../css/v/vh-i6ibxx.css';
import '../../css/u/uqdu66o3d.css';
import '../../css/b/bswg7-4lf.css';
import '../../css/k/krujfob0e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yj-n85ffv"/><path class="fq_sq5zvb"/><path class="d9nqfb0cx"/><path class="vh-i6ibxx"/><path class="uqdu66o3d"/><path class="bswg7-4lf"/><path class="krujfob0e"/>`,
		"fallback": "openmoji:person-frowning-light-skin-tone",
	});
}

export default Component;
