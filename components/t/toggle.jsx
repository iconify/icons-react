import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/u/ufx_3tb7d.css';
import '../../css/w/wtf0wdbbn.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 7)" class="jtowsomii"><circle class="ufx_3tb7d"/><path class="wtf0wdbbn"/></g>`,
		"fallback": "system-uicons:toggle",
	});
}

export default Component;
