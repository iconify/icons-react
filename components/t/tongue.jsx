import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngn6o8dvl.css';
import '../../css/f/fo0y6cbty.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ngn6o8dvl"/><path class="fo0y6cbty"/></g>`,
		"fallback": "fluent-emoji-flat:tongue",
	});
}

export default Component;
