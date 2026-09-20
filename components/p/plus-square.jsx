import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvp3ocb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zvp3ocb9t"/>`,
		"fallback": "uil:plus-square",
	});
}

export default Component;
