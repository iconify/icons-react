import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isb_zrb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isb_zrb9d"/>`,
		"fallback": "covid:social-distancing-virus",
	});
}

export default Component;
