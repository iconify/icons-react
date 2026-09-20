import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anj8b-evo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anj8b-evo"/>`,
		"fallback": "selfhst:vernemq-light",
	});
}

export default Component;
