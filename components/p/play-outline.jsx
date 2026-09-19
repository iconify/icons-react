import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijl3j-lgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijl3j-lgr"/>`,
		"fallback": "famicons:play-outline",
	});
}

export default Component;
