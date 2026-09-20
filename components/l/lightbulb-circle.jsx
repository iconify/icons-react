import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p4tanacyw.css';
import '../../css/q/q73cfrbrr.css';
import '../../css/r/r05gn9bqo.css';
import '../../css/h/hikf6sb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p4tanacyw"/><path clip-rule="evenodd" class="q73cfrbrr"/><path class="r05gn9bqo"/><path class="hikf6sb5x"/></g>`,
		"fallback": "tdesign:lightbulb-circle",
	});
}

export default Component;
