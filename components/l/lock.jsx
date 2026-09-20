import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo709nj-l.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo709nj-l"/>`,
		"fallback": "octicon:lock",
	});
}

export default Component;
