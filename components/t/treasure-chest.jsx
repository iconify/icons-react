import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wtnpixb-s.css';
import '../../css/x/xff5tx9kz.css';
import '../../css/p/pn6tribbt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wtnpixb-s"/><path class="xff5tx9kz"/><path class="pn6tribbt"/></g>`,
		"fallback": "icon-park-solid:treasure-chest",
	});
}

export default Component;
