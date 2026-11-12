import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rovhc9buz.css';
import '../../css/f/fa6qugbtz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rovhc9buz"/><path class="fa6qugbtz"/>`,
		"fallback": "selfhst:ironcalc-dark",
	});
}

export default Component;
