import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw3xaacjo.css';
import '../../css/c/cz084qvho.css';
import '../../css/j/j_9gt8bfj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw3xaacjo"/><path class="cz084qvho"/><path class="j_9gt8bfj"/>`,
		"fallback": "energy-icons:lifebuoy-20",
	});
}

export default Component;
