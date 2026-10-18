import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rflk6vf2q.css';
import '../../css/o/ohc5ubgim.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rflk6vf2q"/><path class="ohc5ubgim"/>`,
		"fallback": "energy-icons:ufh-manifold-48-bold",
	});
}

export default Component;
