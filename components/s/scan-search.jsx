import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyizrib-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyizrib-z"/>`,
		"fallback": "hugeicons:scan-search",
	});
}

export default Component;
