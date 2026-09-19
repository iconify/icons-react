import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jc34h_bxu.css';

const viewBox = {"width":20,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jc34h_bxu"/>`,
		"fallback": "fontisto:paragraph",
	});
}

export default Component;
