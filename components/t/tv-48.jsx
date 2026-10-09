import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu0uvqb2l.css';
import '../../css/k/kafchl2bg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fu0uvqb2l"/><path class="kafchl2bg"/>`,
		"fallback": "energy-icons:tv-48",
	});
}

export default Component;
