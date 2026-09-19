import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wb8qrvbam.css';
import '../../css/f/f5tq5acha.css';
import '../../css/s/s-v07-dkt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wb8qrvbam"/><path class="f5tq5acha"/><path class="s-v07-dkt"/></g>`,
		"fallback": "fluent-emoji-flat:nauseated-face",
	});
}

export default Component;
