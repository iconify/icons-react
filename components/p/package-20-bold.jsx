import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jea-yh2jg.css';
import '../../css/d/dxyc4p_3e.css';
import '../../css/q/q73kfvgtz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jea-yh2jg"/><path class="dxyc4p_3e"/><path class="q73kfvgtz"/>`,
		"fallback": "energy-icons:package-20-bold",
	});
}

export default Component;
