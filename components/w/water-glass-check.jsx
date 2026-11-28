import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg_t7wf0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg_t7wf0z"/>`,
		"fallback": "noviair:water-glass-check",
	});
}

export default Component;
