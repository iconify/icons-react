import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk8e7g4nr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk8e7g4nr"/>`,
		"fallback": "selfhst:namecheap-light",
	});
}

export default Component;
