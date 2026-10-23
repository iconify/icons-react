import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8_t08f2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8_t08f2s"/>`,
		"fallback": "vadivam:test-tubes",
	});
}

export default Component;
