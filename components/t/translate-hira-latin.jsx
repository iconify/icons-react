import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhuqvpb7s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhuqvpb7s"/>`,
		"fallback": "dinkie-icons:translate-hira-latin",
	});
}

export default Component;
