import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5cvzbc-f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5cvzbc-f"/>`,
		"fallback": "selfhst:north-pole-security-light",
	});
}

export default Component;
