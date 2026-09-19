import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o78yt81ir.css';
import '../../css/m/mr5l9klpm.css';
import '../../css/k/kgppe9sta.css';
import '../../css/b/bke7n0aax.css';
import '../../css/t/tmue_pb1c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o78yt81ir"/><path class="mr5l9klpm"/><path class="kgppe9sta"/><path class="bke7n0aax"/><path class="tmue_pb1c"/></g>`,
		"fallback": "fluent-emoji-flat:pencil",
	});
}

export default Component;
