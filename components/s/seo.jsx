import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/swhovccgq.css';
import '../../css/v/vyiw8snfv.css';
import '../../css/w/w-54a5wuc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="swhovccgq"/><path class="vyiw8snfv"/><rect class="w-54a5wuc"/></g>`,
		"fallback": "icon-park-outline:seo",
	});
}

export default Component;
