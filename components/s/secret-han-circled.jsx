import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2k03x09g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2k03x09g"/>`,
		"fallback": "dinkie-icons:secret-han-circled",
	});
}

export default Component;
