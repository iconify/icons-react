import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wwkx2i9yc.css';
import '../../css/n/nb9olfb4n.css';
import '../../css/o/o1ol_lb8x.css';
import '../../css/m/mdr23-23s.css';
import '../../css/y/yyt9bi0bw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="wwkx2i9yc"/><path class="nb9olfb4n"/><path class="o1ol_lb8x"/><path class="mdr23-23s"/><path class="yyt9bi0bw"/></g>`,
		"fallback": "icon-park:paper-money",
	});
}

export default Component;
