import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_wpq7bde.css';
import '../../css/n/nwbpqqb3d.css';
import '../../css/e/exnvyccnx.css';
import '../../css/l/l43k_nb0b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_wpq7bde"/><path class="nwbpqqb3d"/><path class="exnvyccnx"/><path class="l43k_nb0b"/>`,
		"fallback": "energy-icons:pylon-20",
	});
}

export default Component;
