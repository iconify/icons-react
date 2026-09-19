import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh_nj_bik.css';
import '../../css/y/yfbdwob5o.css';
import '../../css/y/yo40yrbuz.css';
import '../../css/c/ce9c_jbll.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh_nj_bik"/><path class="yfbdwob5o"/><path class="yo40yrbuz"/><path class="ce9c_jbll"/>`,
		"fallback": "devicon:slack",
	});
}

export default Component;
