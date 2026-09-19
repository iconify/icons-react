import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1pik2bez.css';
import '../../css/s/sm4_besjl.css';
import '../../css/d/d_zjw_mcz.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1pik2bez"/><path class="sm4_besjl"/><path class="d_zjw_mcz"/>`,
		"fallback": "devicon:stenciljs",
	});
}

export default Component;
