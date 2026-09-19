import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jebob6j0o.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jebob6j0o"/>`,
		"fallback": "dinkie-icons:newspaper",
	});
}

export default Component;
