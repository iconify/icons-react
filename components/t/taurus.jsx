import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/c/c2tc443pc.css';
import '../../css/p/p89mexpzg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="c2tc443pc"/><path class="p89mexpzg"/></g>`,
		"fallback": "icon-park:taurus",
	});
}

export default Component;
