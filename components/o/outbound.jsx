import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gysusqbhb.css';
import '../../css/p/przl2b9sg.css';
import '../../css/e/e4c10cqye.css';
import '../../css/q/qlqmuob1m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="gysusqbhb"/><path class="przl2b9sg"/><circle class="e4c10cqye"/><path class="qlqmuob1m"/></g>`,
		"fallback": "icon-park:outbound",
	});
}

export default Component;
