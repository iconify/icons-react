import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wze0azn8y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wze0azn8y"/>`,
		"fallback": "devicon-plain:sanity",
	});
}

export default Component;
