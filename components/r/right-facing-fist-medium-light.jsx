import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jjpksjvyr.css';
import '../../css/z/zwze4_b8q.css';
import '../../css/t/tn7_zcbnt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jjpksjvyr"/><path class="zwze4_b8q"/><path clip-rule="evenodd" class="tn7_zcbnt"/></g>`,
		"fallback": "fluent-emoji-flat:right-facing-fist-medium-light",
	});
}

export default Component;
