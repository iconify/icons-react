import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/c/casar-aqm.css';
import '../../css/a/acxkbz-0d.css';
import '../../css/n/npc7mnbwl.css';
import '../../css/r/roy8o9bjt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="casar-aqm"/><path class="acxkbz-0d"/><path class="npc7mnbwl"/><path class="roy8o9bjt"/></g>`,
		"fallback": "skill-icons:vscode-light",
	});
}

export default Component;
