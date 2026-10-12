import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phndxwbwk.css';
import '../../css/t/t2rkmiqgs.css';
import '../../css/r/rbnt2jbrg.css';
import '../../css/f/fnaxk-b_r.css';
import '../../css/j/jzeh2cbeq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phndxwbwk"/><path class="t2rkmiqgs"/><path class="rbnt2jbrg"/><path class="fnaxk-b_r"/><path class="jzeh2cbeq"/>`,
		"fallback": "energy-icons:substation-x-20-bold",
	});
}

export default Component;
