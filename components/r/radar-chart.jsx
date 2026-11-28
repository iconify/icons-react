import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmjuior3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmjuior3w"/>`,
		"fallback": "noviair:radar-chart",
	});
}

export default Component;
