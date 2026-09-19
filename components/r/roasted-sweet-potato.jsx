import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4ujr3bnd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4ujr3bnd"/>`,
		"fallback": "dinkie-icons:roasted-sweet-potato",
	});
}

export default Component;
