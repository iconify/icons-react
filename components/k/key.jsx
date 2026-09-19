import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b7jdspq0c.css';
import '../../css/x/xi0idpw6x.css';
import '../../css/f/f7ejgn5dp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="b7jdspq0c"/><path class="xi0idpw6x"/><path class="f7ejgn5dp"/></g>`,
		"fallback": "icon-park-outline:key",
	});
}

export default Component;
