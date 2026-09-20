import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdrf1fb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdrf1fb4s"/>`,
		"fallback": "pixel:thumbsdown-solid",
	});
}

export default Component;
