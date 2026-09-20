import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/c/cue1yvi8n.css';
import '../../css/f/ftlh-bb6g.css';
import '../../css/g/gz7_nhb4m.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(6 3)" class="jtowsomii"><path class="cue1yvi8n"/><circle class="ftlh-bb6g"/><path class="gz7_nhb4m"/></g>`,
		"fallback": "system-uicons:switch",
	});
}

export default Component;
