import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joyz7rb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joyz7rb2z"/>`,
		"fallback": "tdesign:page-first",
	});
}

export default Component;
