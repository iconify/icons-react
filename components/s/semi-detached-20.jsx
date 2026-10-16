import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6t-wwj2r.css';
import '../../css/c/cm_9ngbtm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6t-wwj2r"/><path class="cm_9ngbtm"/>`,
		"fallback": "energy-icons:semi-detached-20",
	});
}

export default Component;
