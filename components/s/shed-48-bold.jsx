import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1z3abb-w.css';
import '../../css/h/h2w2gxl4v.css';
import '../../css/m/mg0mcnb8n.css';
import '../../css/i/i2ko5wydq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1z3abb-w"/><path class="h2w2gxl4v"/><path class="mg0mcnb8n"/><path class="i2ko5wydq"/>`,
		"fallback": "energy-icons:shed-48-bold",
	});
}

export default Component;
