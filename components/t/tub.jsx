import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/l/l890h-b3u.css';
import '../../css/y/yml010bne.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="l890h-b3u"/><path class="yml010bne"/></g>`,
		"fallback": "icon-park-outline:tub",
	});
}

export default Component;
