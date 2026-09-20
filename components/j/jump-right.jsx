import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/t/tfs06nb8p.css';
import '../../css/m/mqw7ahb6a.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="tfs06nb8p"/><path class="mqw7ahb6a"/></g>`,
		"fallback": "system-uicons:jump-right",
	});
}

export default Component;
