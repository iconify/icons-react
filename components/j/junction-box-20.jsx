import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9a328d8s.css';
import '../../css/t/thuizfb_t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9a328d8s"/><path class="thuizfb_t"/>`,
		"fallback": "energy-icons:junction-box-20",
	});
}

export default Component;
