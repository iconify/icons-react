import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw-q_obqu.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw-q_obqu"/>`,
		"fallback": "dinkie-icons:strawberry",
	});
}

export default Component;
