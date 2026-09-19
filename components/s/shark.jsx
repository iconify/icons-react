import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efoaddb2g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efoaddb2g"/>`,
		"fallback": "dinkie-icons:shark",
	});
}

export default Component;
