import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/l/l8_9qmblm.css';
import '../../css/p/pu2dc9b4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="l8_9qmblm"/><path class="pu2dc9b4p"/></g>`,
		"fallback": "icon-park:snacks",
	});
}

export default Component;
