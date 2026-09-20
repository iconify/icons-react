import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtm8l_bup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtm8l_bup"/>`,
		"fallback": "selfhst:it-glue-dark",
	});
}

export default Component;
