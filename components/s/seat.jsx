import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/l/lwka4hb5s.css';
import '../../css/j/jph5gubwo.css';
import '../../css/b/b62w8-blj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="lwka4hb5s"/><path class="jph5gubwo"/><circle class="b62w8-blj"/></g>`,
		"fallback": "icon-park:seat",
	});
}

export default Component;
