import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cau1vhb9o.css';
import '../../css/l/lm7opbs2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cau1vhb9o"/><path class="lm7opbs2n"/>`,
		"fallback": "energy-icons:mouse-48-bold",
	});
}

export default Component;
