import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8ekcbco.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8ekcbco"/>`,
		"fallback": "selfhst:tolgee-dark",
	});
}

export default Component;
