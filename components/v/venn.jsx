import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/b/bgoz-0d_p.css';
import '../../css/h/hiwodhbjd.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="bgoz-0d_p"/><circle class="hiwodhbjd"/></g>`,
		"fallback": "system-uicons:venn",
	});
}

export default Component;
