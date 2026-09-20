import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obi66ebkg.css';
import '../../css/s/s1fl3busw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="obi66ebkg"/><path class="s1fl3busw"/></g>`,
		"fallback": "streamline-flex-color:thermometer-flat",
	});
}

export default Component;
