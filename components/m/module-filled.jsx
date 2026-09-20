import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb121mbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb121mbil"/>`,
		"fallback": "tdesign:module-filled",
	});
}

export default Component;
