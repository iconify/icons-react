import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/a-41mkbyk.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/e/e6nl_9juj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="a-41mkbyk"/><path class="xi0idpw6x"/><path class="e6nl_9juj"/></g>`,
		"fallback": "icon-park-solid:key",
	});
}

export default Component;
