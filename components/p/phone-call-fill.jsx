import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np3fkg3rl.css';
import '../../css/t/tht3gpbhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np3fkg3rl"/><path class="tht3gpbhl"/>`,
		"fallback": "eva:phone-call-fill",
	});
}

export default Component;
