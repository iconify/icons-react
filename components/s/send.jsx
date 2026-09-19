import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/h/hjc4nfbri.css';
import '../../css/l/l4mmbkb6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="hjc4nfbri"/><path class="l4mmbkb6p"/></g>`,
		"fallback": "icon-park:send",
	});
}

export default Component;
