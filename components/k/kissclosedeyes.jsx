import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/h/h7a5zg8ao.css';
import '../../css/a/a9p3_abkz.css';
import '../../css/d/dj143_j_v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="h7a5zg8ao"/><path class="a9p3_abkz"/><path class="dj143_j_v"/>`,
		"fallback": "fxemoji:kissclosedeyes",
	});
}

export default Component;
