import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bmqf4y-5r.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/u/u74v93ocj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGfySGctDi" x1="214.46" x2="709.401" y1="309.438" y2="-168.11" gradientTransform="matrix(1 0 0 -1 -200 301)" gradientUnits="userSpaceOnUse"><stop offset="0" class="bmqf4y-5r"/><stop offset="1" class="vc--wpv5i"/></linearGradient><path fill="url(#SVGfySGctDi)" class="u74v93ocj"/>`,
		"fallback": "selfhst:vscodium-light",
	});
}

export default Component;
