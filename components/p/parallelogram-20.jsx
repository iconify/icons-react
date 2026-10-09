import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhnu4y6xm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhnu4y6xm"/>`,
		"fallback": "energy-icons:parallelogram-20",
	});
}

export default Component;
