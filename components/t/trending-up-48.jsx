import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/infdtvbxp.css';
import '../../css/x/xa4y2gv4w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="infdtvbxp"/><path class="xa4y2gv4w"/>`,
		"fallback": "energy-icons:trending-up-48",
	});
}

export default Component;
