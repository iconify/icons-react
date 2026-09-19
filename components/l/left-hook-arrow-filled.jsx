import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngl1ebc7s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngl1ebc7s"/>`,
		"fallback": "dinkie-icons:left-hook-arrow-filled",
	});
}

export default Component;
