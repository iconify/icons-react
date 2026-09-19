import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx4703bpk.css';
import '../../css/g/gc07aup3p.css';
import '../../css/z/zp2_tubhd.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx4703bpk"/><path class="gc07aup3p"/><path class="zp2_tubhd"/>`,
		"fallback": "devicon:nuxtjs",
	});
}

export default Component;
