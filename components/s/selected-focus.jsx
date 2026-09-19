import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/gu5han_5f.css';
import '../../css/y/ywx-y6bsq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="gu5han_5f"/><path class="ywx-y6bsq"/></g>`,
		"fallback": "icon-park-solid:selected-focus",
	});
}

export default Component;
