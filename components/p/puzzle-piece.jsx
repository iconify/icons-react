import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cktyzt25r.css';
import '../../css/c/c-oa5-aqk.css';
import '../../css/w/w4slt7qdo.css';
import '../../css/g/grs8eeboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cktyzt25r wm-k"/><path class="c-oa5-aqk wm-k"/><path class="w4slt7qdo wm-k"/><path class="grs8eeboq wm-shine"/></g>`,
		"fallback": "withicons-anime:puzzle-piece",
	});
}

export default Component;
