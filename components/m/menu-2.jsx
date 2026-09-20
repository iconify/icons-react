import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_n-ew7ad.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_n-ew7ad"/>`,
		"fallback": "tabler:menu-2",
	});
}

export default Component;
