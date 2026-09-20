import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/z/z_p2in-7t.css';
import '../../css/m/mpjm_8bds.css';
import '../../css/z/zbima0b7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="z_p2in-7t"/><path class="mpjm_8bds"/><path class="zbima0b7g"/></g>`,
		"fallback": "streamline-plump-color:landing",
	});
}

export default Component;
