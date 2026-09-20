import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/ncmhkr_hu.css';
import '../../css/c/crvzepbgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="ncmhkr_hu"/><path class="crvzepbgn"/></g>`,
		"fallback": "streamline-plump:user-single-neutral-male",
	});
}

export default Component;
