import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1e_f5blg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1e_f5blg"/>`,
		"fallback": "energy-icons:peak-shaving-48",
	});
}

export default Component;
