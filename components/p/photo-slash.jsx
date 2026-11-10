import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6nt4dr_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6nt4dr_o"/>`,
		"fallback": "sidekickicons:photo-slash",
	});
}

export default Component;
