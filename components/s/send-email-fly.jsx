import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oufzxwf-a.css';
import '../../css/c/cxwt06uik.css';
import '../../css/v/v7fmw-bld.css';
import '../../css/y/ycpa6rbjz.css';
import '../../css/j/j0qw0rbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oufzxwf-a"/><path class="cxwt06uik"/><path class="v7fmw-bld"/><path class="ycpa6rbjz"/><path class="j0qw0rbem"/></g>`,
		"fallback": "streamline-ultimate-color:send-email-fly",
	});
}

export default Component;
