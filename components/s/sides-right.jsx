import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uk7tz_b4w.css';
import '../../css/i/ibnodixuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="uk7tz_b4w"/><path vector-effect="non-scaling-stroke" class="ibnodixuu"/></g>`,
		"fallback": "wordpress:sides-right",
	});
}

export default Component;
