import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyl3xwb3e.css';
import '../../css/h/h5yvjibqy.css';
import '../../css/l/lstczpj7l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eyl3xwb3e"/><path class="h5yvjibqy"/><path class="lstczpj7l"/></g>`,
		"fallback": "fluent-emoji-flat:speaker-high-volume",
	});
}

export default Component;
