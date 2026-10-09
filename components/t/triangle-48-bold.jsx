import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnut6ab4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnut6ab4j"/>`,
		"fallback": "energy-icons:triangle-48-bold",
	});
}

export default Component;
