import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m72yo6b_a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m72yo6b_a"/>`,
		"fallback": "energy-icons:laptop-20",
	});
}

export default Component;
