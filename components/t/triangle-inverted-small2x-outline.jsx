import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkt4d55tb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dkt4d55tb"/>`,
		"fallback": "healthicons:triangle-inverted-small2x-outline",
	});
}

export default Component;
