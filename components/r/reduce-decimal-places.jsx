import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/nbai-vk7r.css';
import '../../css/n/n2q61zvak.css';
import '../../css/w/wku1twfix.css';
import '../../css/k/k-w74vgau.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="nbai-vk7r"/><path class="n2q61zvak"/><path class="wku1twfix"/><path class="k-w74vgau"/></g>`,
		"fallback": "icon-park:reduce-decimal-places",
	});
}

export default Component;
