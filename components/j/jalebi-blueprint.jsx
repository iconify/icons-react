import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/n/njmk__s6q.css';
import '../../css/l/l33z8rc6h.css';
import '../../css/t/tjbxadb6s.css';
import '../../css/r/rd7sljvjm.css';
import '../../css/d/dgp8ihnse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="njmk__s6q wm-deco"/><path class="l33z8rc6h wm-deco"/><path class="tjbxadb6s wm-deco"/><path class="rd7sljvjm wm-k"/><path class="dgp8ihnse wm-a"/></g>`,
		"fallback": "withicons:jalebi-blueprint",
	});
}

export default Component;
