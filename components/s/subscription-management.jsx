import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxgckcb1c.css';
import '../../css/w/w8tdd6b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxgckcb1c"/><path class="w8tdd6b3a"/>`,
		"fallback": "eos-icons:subscription-management",
	});
}

export default Component;
