import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s189b_bca.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s189b_bca"/>`,
		"fallback": "fontisto:nav-icon-list-a",
	});
}

export default Component;
