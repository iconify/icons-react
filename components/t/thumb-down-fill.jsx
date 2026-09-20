import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xummgtbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xummgtbre"/>`,
		"fallback": "si:thumb-down-fill",
	});
}

export default Component;
