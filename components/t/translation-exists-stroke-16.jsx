import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twl3sac9j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twl3sac9j"/>`,
		"fallback": "garden:translation-exists-stroke-16",
	});
}

export default Component;
