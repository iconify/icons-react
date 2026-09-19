import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/b/b8tqzsb4n.css';
import '../../css/v/v_8w1n7-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="b8tqzsb4n"/><path class="v_8w1n7-q"/></g>`,
		"fallback": "icon-park-solid:voice-input",
	});
}

export default Component;
