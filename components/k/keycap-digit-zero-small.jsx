import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obm7hd71g.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obm7hd71g"/>`,
		"fallback": "dinkie-icons:keycap-digit-zero-small",
	});
}

export default Component;
