import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njcg00bym.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njcg00bym"/>`,
		"fallback": "dinkie-icons:u1fae4",
	});
}

export default Component;
