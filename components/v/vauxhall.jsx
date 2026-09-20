import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/crvcl9i5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="crvcl9i5z"/>`,
		"fallback": "thesvg-color:vauxhall",
	});
}

export default Component;
