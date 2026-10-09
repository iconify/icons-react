import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3ivimbut.css';
import '../../css/f/fqx9z9z0l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3ivimbut"/><path class="fqx9z9z0l"/>`,
		"fallback": "energy-icons:solar-shading-20",
	});
}

export default Component;
