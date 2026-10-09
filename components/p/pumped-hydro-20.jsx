import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3mg6mryn.css';
import '../../css/z/zykw2fvhd.css';
import '../../css/o/o1sgq7a6l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3mg6mryn"/><path class="zykw2fvhd"/><path class="o1sgq7a6l"/>`,
		"fallback": "energy-icons:pumped-hydro-20",
	});
}

export default Component;
