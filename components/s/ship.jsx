import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/g/gvlxech7j.css';
import '../../css/w/wumm05b8l.css';
import '../../css/x/x3ti3hwhe.css';
import '../../css/k/kbrd_6bhc.css';
import '../../css/s/sfwq2c7di.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path clip-rule="evenodd" class="gvlxech7j"/><path class="wumm05b8l"/><path class="x3ti3hwhe"/><path class="kbrd_6bhc"/><path class="sfwq2c7di"/></g>`,
		"fallback": "icon-park:ship",
	});
}

export default Component;
