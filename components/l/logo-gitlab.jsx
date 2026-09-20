import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msauq_bnb.css';
import '../../css/d/dznolbbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msauq_bnb"/><path class="dznolbbre"/></g>`,
		"fallback": "tdesign:logo-gitlab",
	});
}

export default Component;
