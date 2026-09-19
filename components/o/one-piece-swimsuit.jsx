import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b5t_snbvi.css';
import '../../css/t/totumsb0l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b5t_snbvi"/><path class="totumsb0l"/></g>`,
		"fallback": "fluent-emoji-flat:one-piece-swimsuit",
	});
}

export default Component;
