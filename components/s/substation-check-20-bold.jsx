import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phndxwbwk.css';
import '../../css/t/t2rkmiqgs.css';
import '../../css/r/rbnt2jbrg.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phndxwbwk"/><path class="t2rkmiqgs"/><path class="rbnt2jbrg"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:substation-check-20-bold",
	});
}

export default Component;
