import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/goo_yticv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="goo_yticv"/>`,
		"fallback": "dinkie-icons:personal-computer",
	});
}

export default Component;
