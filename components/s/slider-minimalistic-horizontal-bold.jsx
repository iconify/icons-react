import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvskk7nlf.css';
import '../../css/d/d9yqzeb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvskk7nlf"/><path clip-rule="evenodd" class="d9yqzeb3s"/>`,
		"fallback": "solar:slider-minimalistic-horizontal-bold",
	});
}

export default Component;
