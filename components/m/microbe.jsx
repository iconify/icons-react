import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrbmz5bow.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrbmz5bow"/>`,
		"fallback": "dinkie-icons:microbe",
	});
}

export default Component;
