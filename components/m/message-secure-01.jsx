import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxy4pkb4g.css';
import '../../css/h/hszogpsne.css';
import '../../css/a/a5706cu5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pxy4pkb4g"/><path class="hszogpsne"/><path class="a5706cu5c"/></g>`,
		"fallback": "hugeicons:message-secure-01",
	});
}

export default Component;
