import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/a/avhc0tfrh.css';
import '../../css/r/ryvt40bkw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="avhc0tfrh"/><path class="ryvt40bkw"/></g>`,
		"fallback": "system-uicons:pages",
	});
}

export default Component;
