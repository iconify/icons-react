import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pohjlbb7n.css';
import '../../css/b/ba_cj3b5l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pohjlbb7n"/><path clip-rule="evenodd" class="ba_cj3b5l"/></g>`,
		"fallback": "icon-park-solid:radar-two",
	});
}

export default Component;
