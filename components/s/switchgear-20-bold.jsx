import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tirtiacjr.css';
import '../../css/h/hvucwhbtq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tirtiacjr"/><path class="hvucwhbtq"/>`,
		"fallback": "energy-icons:switchgear-20-bold",
	});
}

export default Component;
