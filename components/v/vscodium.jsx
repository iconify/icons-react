import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbj93mbti.css';
import '../../css/g/gcvz4cw5d.css';
import '../../css/u/u74v93ocj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGCm7E3RHI" x1="214.46" x2="709.401" y1="309.438" y2="-168.11" gradientTransform="matrix(1 0 0 -1 -200 301)" gradientUnits="userSpaceOnUse"><stop offset="0" class="tbj93mbti"/><stop offset="1" class="gcvz4cw5d"/></linearGradient><path fill="url(#SVGCm7E3RHI)" class="u74v93ocj"/>`,
		"fallback": "selfhst:vscodium",
	});
}

export default Component;
