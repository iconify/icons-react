import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/itrhzub9w.css';
import '../../css/s/ss7gwt47d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="itrhzub9w"/><path vector-effect="non-scaling-stroke" class="ss7gwt47d"/></g>`,
		"fallback": "wordpress:pages",
	});
}

export default Component;
