import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_nu_bb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_nu_bb9v"/>`,
		"fallback": "mdi:umbrella",
	});
}

export default Component;
