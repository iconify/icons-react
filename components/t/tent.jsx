import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-8x6fiyv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-8x6fiyv"/>`,
		"fallback": "fontisto:tent",
	});
}

export default Component;
