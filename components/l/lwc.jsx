import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2wg_xbzr.css';
import '../../css/h/huflwkbsf.css';
import '../../css/y/yp4zj8ohv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2wg_xbzr"/><path class="huflwkbsf"/><path class="yp4zj8ohv"/>`,
		"fallback": "devicon:lwc",
	});
}

export default Component;
