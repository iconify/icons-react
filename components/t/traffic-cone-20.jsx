import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chylptbbp.css';
import '../../css/l/lu03jdbhp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chylptbbp"/><path class="lu03jdbhp"/>`,
		"fallback": "energy-icons:traffic-cone-20",
	});
}

export default Component;
