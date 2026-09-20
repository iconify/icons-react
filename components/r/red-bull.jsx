import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llu5rym_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llu5rym_o"/>`,
		"fallback": "thesvg-color:red-bull",
	});
}

export default Component;
