import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fho_u-6sw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fho_u-6sw"/>`,
		"fallback": "stash:social-unsplash-solid",
	});
}

export default Component;
