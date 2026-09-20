import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwzp-9bry.css';
import '../../css/o/o13y44s_y.css';
import '../../css/e/es3-6mhad.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qwzp-9bry"/><path class="o13y44s_y"/><path class="es3-6mhad"/></g>`,
		"fallback": "streamline-plump-color:projector-screen-flat",
	});
}

export default Component;
