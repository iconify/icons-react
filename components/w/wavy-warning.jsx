import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5j846b7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5j846b7z"/>`,
		"fallback": "ci:wavy-warning",
	});
}

export default Component;
