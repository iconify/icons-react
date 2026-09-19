import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhpd0_utu.css';
import '../../css/j/jrh-e7b-k.css';
import '../../css/q/qwnvu9buq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uhpd0_utu"/><path class="jrh-e7b-k"/><path class="qwnvu9buq"/></g>`,
		"fallback": "fluent-emoji-flat:moai",
	});
}

export default Component;
