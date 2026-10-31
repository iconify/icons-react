import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhi3rlo9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhi3rlo9u"/>`,
		"fallback": "coolicons:slider-vertical-3-fill-round",
	});
}

export default Component;
