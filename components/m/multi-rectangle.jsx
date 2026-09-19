import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/af13mybgf.css';
import '../../css/b/bz2vyybde.css';
import '../../css/m/m49v12b7w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="af13mybgf"/><path class="bz2vyybde"/><path class="m49v12b7w"/></g>`,
		"fallback": "icon-park-solid:multi-rectangle",
	});
}

export default Component;
