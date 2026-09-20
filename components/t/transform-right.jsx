import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ig-nuabps.css';
import '../../css/u/uby4pqbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ig-nuabps"/><path class="uby4pqbtg"/></g>`,
		"fallback": "streamline-ultimate-color:transform-right",
	});
}

export default Component;
