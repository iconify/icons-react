import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/rjlaemx0i.css';
import '../../css/j/jpbamb4_e.css';
import '../../css/s/s9j59hb6k.css';
import '../../css/z/zudvkfbyk.css';
import '../../css/r/r5881kaov.css';
import '../../css/v/vgghd5bze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path clip-rule="evenodd" class="rjlaemx0i"/><path class="jpbamb4_e"/><path class="s9j59hb6k"/><path class="zudvkfbyk"/><path class="r5881kaov"/><path class="vgghd5bze"/></g>`,
		"fallback": "icon-park:maslow-pyramids",
	});
}

export default Component;
