import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvy1pybls.css';
import '../../css/g/g63v8lcab.css';
import '../../css/i/ieb8qdn3z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvy1pybls"/><path class="g63v8lcab"/><path class="ieb8qdn3z"/>`,
		"fallback": "energy-icons:log-in-20-bold",
	});
}

export default Component;
