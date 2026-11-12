import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5fb0lpcu.css';
import '../../css/o/ojj18acah.css';
import '../../css/e/evg78--em.css';
import '../../css/u/udo9k0bwy.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGX8PI2bWX" x1="23.5" x2="2.37" y1="3.04" y2="24.17" gradientUnits="userSpaceOnUse"><stop offset="0" class="y5fb0lpcu"/><stop offset="1" class="ojj18acah"/></linearGradient></defs><path class="evg78--em"/><path fill="url(#SVGX8PI2bWX)" class="udo9k0bwy"/>`,
		"fallback": "devicon:turborepo",
	});
}

export default Component;
