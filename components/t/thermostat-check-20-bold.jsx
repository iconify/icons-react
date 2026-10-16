import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvdded8zf.css';
import '../../css/n/nm0j_eisa.css';
import '../../css/h/hp8p1qxmm.css';
import '../../css/v/vkfkgacfm.css';
import '../../css/a/asc4-fm2e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvdded8zf"/><path class="nm0j_eisa"/><path class="hp8p1qxmm"/><path class="vkfkgacfm"/><path class="asc4-fm2e"/>`,
		"fallback": "energy-icons:thermostat-check-20-bold",
	});
}

export default Component;
