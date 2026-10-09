import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de63-bcoq.css';
import '../../css/g/gmk8tebem.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de63-bcoq"/><path class="gmk8tebem"/>`,
		"fallback": "energy-icons:noise-reduction-48-bold",
	});
}

export default Component;
