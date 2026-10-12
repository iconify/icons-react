import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecjx1yg4j.css';
import '../../css/l/l6k0rd2qb.css';
import '../../css/g/gzcgyebif.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecjx1yg4j"/><path class="l6k0rd2qb"/><path class="gzcgyebif"/>`,
		"fallback": "energy-icons:mop-20",
	});
}

export default Component;
