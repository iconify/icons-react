import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/loji95m6e.css';
import '../../css/j/j10ksqbpm.css';
import '../../css/x/x6bc1350x.css';
import '../../css/e/em5bsmbgk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="loji95m6e"/><path class="j10ksqbpm"/><path class="x6bc1350x"/><path class="em5bsmbgk"/></g>`,
		"fallback": "icon-park-solid:multicast",
	});
}

export default Component;
