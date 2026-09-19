import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nhhjpt21o.css';
import '../../css/k/kosv92b2z.css';
import '../../css/l/lo7mucdnd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nhhjpt21o"/><path class="kosv92b2z"/><circle class="lo7mucdnd"/></g>`,
		"fallback": "icon-park-solid:u-turn-left",
	});
}

export default Component;
