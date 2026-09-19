import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fn--mg62j.css';
import '../../css/c/cqmgvsb1g.css';
import '../../css/p/p6d1ecbvs.css';
import '../../css/v/vfmc-6bme.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fn--mg62j"/><rect class="cqmgvsb1g"/><path class="p6d1ecbvs"/><path class="vfmc-6bme"/></g>`,
		"fallback": "icon-park-solid:locking-computer",
	});
}

export default Component;
