import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-n85ffv.css';
import '../../css/y/ydnqf8bcc.css';
import '../../css/p/p8e6s83ne.css';
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
		"content": `<path class="yj-n85ffv"/><path class="ydnqf8bcc"/><path class="p8e6s83ne"/><path class="vh-i6ibxx"/><path class="uqdu66o3d"/><path class="bswg7-4lf"/><path class="krujfob0e"/>`,
		"fallback": "openmoji:person-frowning-medium-skin-tone",
	});
}

export default Component;
