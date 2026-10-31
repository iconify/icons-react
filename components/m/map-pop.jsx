import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b0c_ah97o.css';
import '../../css/a/ao54odt3u.css';
import '../../css/j/j4qvigbwi.css';
import '../../css/p/pvi46g6zw.css';
import '../../css/n/n-xmf2b7h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b0c_ah97o"/><path class="ao54odt3u"/><path class="j4qvigbwi"/><path class="pvi46g6zw"/><path class="n-xmf2b7h"/></g>`,
		"fallback": "streamline-kameleon-color:map-pop",
	});
}

export default Component;
