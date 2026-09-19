import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq_x_3byb.css';
import '../../css/x/xxuy4sbhs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gq_x_3byb"/><path class="xxuy4sbhs"/></g>`,
		"fallback": "fluent-emoji-flat:mans-shoe",
	});
}

export default Component;
