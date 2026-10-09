import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/w/w4wlpvbuu.css';
import '../../css/x/xjml5ebvu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="w4wlpvbuu"/><path class="xjml5ebvu"/>`,
		"fallback": "energy-icons:target-20",
	});
}

export default Component;
