import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lgztr_bhc.css';
import '../../css/t/tiwcnbcjo.css';
import '../../css/u/urlrlhb3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lgztr_bhc"/><path class="tiwcnbcjo"/><path class="urlrlhb3s"/></g>`,
		"fallback": "fluent-emoji-flat:pretzel",
	});
}

export default Component;
