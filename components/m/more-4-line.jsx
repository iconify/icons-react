import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldjtx9lab.css';
import '../../css/m/mrqn0ob3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldjtx9lab"/><path class="mrqn0ob3b"/>`,
		"fallback": "mingcute:more-4-line",
	});
}

export default Component;
