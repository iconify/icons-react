import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b4z3-2bzh.css';
import '../../css/d/dh25c2wrp.css';
import '../../css/z/zsz_pac0e.css';
import '../../css/c/cv5mfmbfw.css';
import '../../css/v/vcg_5nb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="b4z3-2bzh"/><path class="dh25c2wrp"/><path class="zsz_pac0e"/><path class="cv5mfmbfw"/><path class="vcg_5nb-w"/></g>`,
		"fallback": "streamline-plump-color:invisible-1",
	});
}

export default Component;
