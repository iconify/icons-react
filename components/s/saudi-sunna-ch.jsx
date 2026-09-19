import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaib1ovzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaib1ovzd"/>`,
		"fallback": "cbi:saudi-sunna-ch",
	});
}

export default Component;
