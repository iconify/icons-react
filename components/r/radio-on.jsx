import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/a/agd2mgb0r.css';
import '../../css/d/d4mhkp2ar.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><circle class="agd2mgb0r"/><circle class="d4mhkp2ar"/></g>`,
		"fallback": "system-uicons:radio-on",
	});
}

export default Component;
