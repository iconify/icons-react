import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yj-n85ffv.css';
import '../../css/h/h7adegbjv.css';
import '../../css/j/jz8z2rbwx.css';
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
		"content": `<path class="yj-n85ffv"/><path class="h7adegbjv"/><path class="jz8z2rbwx"/><path class="vh-i6ibxx"/><path class="uqdu66o3d"/><path class="bswg7-4lf"/><path class="krujfob0e"/>`,
		"fallback": "openmoji:person-frowning-medium-dark-skin-tone",
	});
}

export default Component;
