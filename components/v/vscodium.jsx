import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwuxu7bdj.css';
import '../../css/z/zkrs_kb_e.css';
import '../../css/v/v4_he7buw.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGMt2BCx9i" x1="199.997" x2="296.665" y1="214.302" y2="307.573" gradientTransform="translate(-256 -272.64)scale(1.28)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bwuxu7bdj"/><stop offset="1" class="zkrs_kb_e"/></linearGradient></defs><path fill="url(#SVGMt2BCx9i)" class="v4_he7buw"/>`,
		"fallback": "devicon:vscodium",
	});
}

export default Component;
