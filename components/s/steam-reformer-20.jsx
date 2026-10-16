import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c38ur7vib.css';
import '../../css/f/fwwetn73i.css';
import '../../css/v/vu0y6dd0n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c38ur7vib"/><path class="fwwetn73i"/><path class="vu0y6dd0n"/>`,
		"fallback": "energy-icons:steam-reformer-20",
	});
}

export default Component;
