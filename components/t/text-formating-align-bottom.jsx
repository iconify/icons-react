import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ehk9p_o-j.css';
import '../../css/i/ip6fj1bco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ehk9p_o-j"/><path class="ip6fj1bco"/></g>`,
		"fallback": "streamline-freehand-color:text-formating-align-bottom",
	});
}

export default Component;
