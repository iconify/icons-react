import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8e42ccqn.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8e42ccqn"/>`,
		"fallback": "dinkie-icons:language-hira-filled",
	});
}

export default Component;
