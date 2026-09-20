import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/onbp78bnd.css';
import '../../css/i/ij5dgvbbw.css';
import '../../css/i/ihb9tmbkk.css';
import '../../css/h/h7el531jk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="onbp78bnd"/><path class="ij5dgvbbw"/><path class="ihb9tmbkk"/><path class="h7el531jk"/></g>`,
		"fallback": "streamline-plump-color:magic-wand-1",
	});
}

export default Component;
