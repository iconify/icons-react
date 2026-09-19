import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snwtadbgg.css';
import '../../css/t/tqrk15mev.css';
import '../../css/b/b_8jkqb8i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snwtadbgg"/><path class="tqrk15mev"/><path class="b_8jkqb8i"/></g>`,
		"fallback": "fluent-emoji-flat:leftwards-pushing-hand-medium-dark",
	});
}

export default Component;
