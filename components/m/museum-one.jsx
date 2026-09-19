import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/ii0wlebwq.css';
import '../../css/l/lqqlthg3z.css';
import '../../css/h/hx_9wvu-g.css';
import '../../css/v/v6juoxv0n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ii0wlebwq"/><path class="lqqlthg3z"/><path class="hx_9wvu-g"/><path class="v6juoxv0n"/></g>`,
		"fallback": "icon-park-outline:museum-one",
	});
}

export default Component;
