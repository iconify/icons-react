import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ei4q6_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0ei4q6_t"/>`,
		"fallback": "thesvg:seat",
	});
}

export default Component;
