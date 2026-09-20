import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do_kecb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do_kecb6e"/>`,
		"fallback": "tabler:rugby",
	});
}

export default Component;
