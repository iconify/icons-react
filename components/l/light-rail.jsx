import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv-3p-s8a.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv-3p-s8a"/>`,
		"fallback": "dinkie-icons:light-rail",
	});
}

export default Component;
