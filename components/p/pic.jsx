import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x9u4gylcp.css';
import '../../css/i/ixqdcsbvp.css';
import '../../css/a/a41nocdac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path clip-rule="evenodd" class="x9u4gylcp"/><path clip-rule="evenodd" class="ixqdcsbvp"/><path class="a41nocdac"/></g>`,
		"fallback": "icon-park-solid:pic",
	});
}

export default Component;
