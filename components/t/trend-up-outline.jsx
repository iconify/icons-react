import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/getz5jb7k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="getz5jb7k"/>`,
		"fallback": "teenyicons:trend-up-outline",
	});
}

export default Component;
