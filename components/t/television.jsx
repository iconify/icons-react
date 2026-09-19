import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k57r_666u.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k57r_666u"/>`,
		"fallback": "dinkie-icons:television",
	});
}

export default Component;
