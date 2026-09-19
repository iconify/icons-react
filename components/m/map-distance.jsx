import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jju44hr4p.css';
import '../../css/n/n2sextrqm.css';
import '../../css/w/wsnze-bbi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="jju44hr4p"/><path class="n2sextrqm"/><path class="wsnze-bbi"/></g>`,
		"fallback": "icon-park-outline:map-distance",
	});
}

export default Component;
