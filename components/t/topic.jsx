import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/w/wb3mwmbun.css';
import '../../css/z/zp7rzkbkq.css';
import '../../css/g/gde01rm7l.css';
import '../../css/y/yruw9vbqy.css';
import '../../css/s/s029glbdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="wb3mwmbun"/><path class="zp7rzkbkq"/><path class="gde01rm7l"/><path class="yruw9vbqy"/><path class="s029glbdj"/></g>`,
		"fallback": "icon-park:topic",
	});
}

export default Component;
