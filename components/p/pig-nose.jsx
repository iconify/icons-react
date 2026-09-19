import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iw6r675bo.css';
import '../../css/k/kh_b6bnaw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iw6r675bo"/><path class="kh_b6bnaw"/></g>`,
		"fallback": "fluent-emoji-flat:pig-nose",
	});
}

export default Component;
