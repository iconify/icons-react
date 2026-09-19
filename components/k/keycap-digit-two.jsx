import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwia4_b9f.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwia4_b9f"/>`,
		"fallback": "dinkie-icons:keycap-digit-two",
	});
}

export default Component;
