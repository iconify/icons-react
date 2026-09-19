import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lwgt0b34p.css';
import '../../css/p/p3gg84b6g.css';
import '../../css/b/b62w8-blj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="lwgt0b34p"/><path class="p3gg84b6g"/><circle class="b62w8-blj"/></g>`,
		"fallback": "icon-park:jump",
	});
}

export default Component;
