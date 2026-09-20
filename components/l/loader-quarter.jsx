import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iu62q_mcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iu62q_mcm"/>`,
		"fallback": "tabler:loader-quarter",
	});
}

export default Component;
