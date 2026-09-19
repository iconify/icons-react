import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k99z0y77v.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k99z0y77v"/>`,
		"fallback": "dinkie-icons:keycap-digit-two-small",
	});
}

export default Component;
