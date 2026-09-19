import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jjx2uec9c.css';
import '../../css/s/suo1febzm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="jjx2uec9c"/><rect class="suo1febzm"/></g>`,
		"fallback": "garden:thumbs-down-stroke-12",
	});
}

export default Component;
