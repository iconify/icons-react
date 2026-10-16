import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krbuex_sg.css';
import '../../css/p/pv8po1b5r.css';
import '../../css/f/fvs6qwbry.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krbuex_sg"/><path class="pv8po1b5r"/><path class="fvs6qwbry"/>`,
		"fallback": "energy-icons:post-office-20-bold",
	});
}

export default Component;
