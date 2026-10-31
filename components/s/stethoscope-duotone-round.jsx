import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n_-2-nbyf.css';
import '../../css/x/xfkqvbc7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n_-2-nbyf"/><path class="xfkqvbc7v"/></g>`,
		"fallback": "coolicons:stethoscope-duotone-round",
	});
}

export default Component;
