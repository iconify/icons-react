import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wp_i_kw1r.css';

const viewBox = {"width":1024,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wp_i_kw1r"/>`,
		"fallback": "whh:miui",
	});
}

export default Component;
