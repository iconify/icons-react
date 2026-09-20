import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7skrbctf.css';
import '../../css/v/vxo1lvo7r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c7skrbctf"/><path clip-rule="evenodd" class="vxo1lvo7r"/></g>`,
		"fallback": "streamline-plump-color:user-podcast-flat",
	});
}

export default Component;
