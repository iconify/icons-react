import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5b9qsji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5b9qsji"/>`,
		"fallback": "energy-icons:legend-48",
	});
}

export default Component;
