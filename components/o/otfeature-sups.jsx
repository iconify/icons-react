import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3ms7hb6x.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3ms7hb6x"/>`,
		"fallback": "dinkie-icons:otfeature-sups",
	});
}

export default Component;
