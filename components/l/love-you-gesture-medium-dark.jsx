import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4k6_sgyk.css';
import '../../css/s/s_8xuubkj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4k6_sgyk"/><path class="s_8xuubkj"/></g>`,
		"fallback": "fluent-emoji-flat:love-you-gesture-medium-dark",
	});
}

export default Component;
