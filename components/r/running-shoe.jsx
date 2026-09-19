import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uobxakbrv.css';
import '../../css/x/x1zemtblh.css';
import '../../css/c/cd3afsyde.css';
import '../../css/u/u34z03z1k.css';
import '../../css/j/jr_6xzbiy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uobxakbrv"/><path class="x1zemtblh"/><path clip-rule="evenodd" class="cd3afsyde"/><path class="u34z03z1k"/><path class="jr_6xzbiy"/></g>`,
		"fallback": "fluent-emoji-flat:running-shoe",
	});
}

export default Component;
