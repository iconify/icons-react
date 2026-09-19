import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qusxvccpn.css';
import '../../css/d/du-vibcig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="qusxvccpn"/><path class="du-vibcig"/></g>`,
		"fallback": "icon-park-solid:mouse",
	});
}

export default Component;
