import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbb5sxb8o.css';
import '../../css/g/g74pk9c5p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbb5sxb8o"/><path class="g74pk9c5p"/>`,
		"fallback": "energy-icons:microplastics-48-bold",
	});
}

export default Component;
