import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h8r_674nc.css';
import '../../css/z/z09ukdbfo.css';
import '../../css/v/vt575fbgo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h8r_674nc"/><path clip-rule="evenodd" class="z09ukdbfo"/><path class="vt575fbgo"/></g>`,
		"fallback": "streamline-plump-color:skull-2-flat",
	});
}

export default Component;
