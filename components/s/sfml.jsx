import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rldz3bb1z.css';
import '../../css/w/wdrk3cy4t.css';
import '../../css/p/p8wh8o_bf.css';
import '../../css/s/s0qlh1b2c.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rldz3bb1z"/><path class="wdrk3cy4t"/><path class="p8wh8o_bf"/><path class="s0qlh1b2c"/>`,
		"fallback": "devicon:sfml",
	});
}

export default Component;
