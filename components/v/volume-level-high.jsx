import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v4u8uf5wk.css';
import '../../css/p/prqh69i6h.css';
import '../../css/i/i6un21b8g.css';
import '../../css/p/ptuap3bhk.css';
import '../../css/t/t2vg35bdy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="v4u8uf5wk"/><path class="prqh69i6h"/><path class="i6un21b8g"/><path class="ptuap3bhk"/><path class="t2vg35bdy"/></g>`,
		"fallback": "streamline-plump-color:volume-level-high",
	});
}

export default Component;
