import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a08mf6bmv.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a08mf6bmv"/>`,
		"fallback": "dinkie-icons:keycap-digit-six-small-filled",
	});
}

export default Component;
