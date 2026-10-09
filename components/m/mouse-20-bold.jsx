import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqm22dloe.css';
import '../../css/q/qdyabyskt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqm22dloe"/><path class="qdyabyskt"/>`,
		"fallback": "energy-icons:mouse-20-bold",
	});
}

export default Component;
