import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du59mfmab.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du59mfmab"/>`,
		"fallback": "selfhst:medassist-dark",
	});
}

export default Component;
