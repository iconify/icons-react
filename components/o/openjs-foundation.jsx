import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s7lfnq72c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s7lfnq72c"/>`,
		"fallback": "thesvg-color:openjs-foundation",
	});
}

export default Component;
