import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwoov0b5l.css';
import '../../css/a/au_fk_y7g.css';
import '../../css/t/towtafbyn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cwoov0b5l"/><path class="au_fk_y7g"/><path class="towtafbyn"/></g>`,
		"fallback": "fluent-emoji-flat:studio-microphone",
	});
}

export default Component;
