import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk3i0ubgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk3i0ubgc"/>`,
		"fallback": "noviair-light:scatter-chart",
	});
}

export default Component;
