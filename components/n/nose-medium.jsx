import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6zjwhbwn.css';
import '../../css/x/xe7sd5wds.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6zjwhbwn"/><path class="xe7sd5wds"/></g>`,
		"fallback": "fluent-emoji-flat:nose-medium",
	});
}

export default Component;
