import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bze383b6h.css';
import '../../css/p/ppuwdj0xa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bze383b6h"/><path class="ppuwdj0xa"/>`,
		"fallback": "energy-icons:torch-48-bold",
	});
}

export default Component;
