import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gro8lebrz.css';
import '../../css/c/c6_bjubqo.css';
import '../../css/d/d50-4zb9n.css';
import '../../css/r/rkepvhbsd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gro8lebrz"/><path class="c6_bjubqo"/><path class="d50-4zb9n"/><path class="rkepvhbsd"/>`,
		"fallback": "energy-icons:mvhr-20-bold",
	});
}

export default Component;
