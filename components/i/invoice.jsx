import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b00j86b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b00j86b3a"/>`,
		"fallback": "hugeicons:invoice",
	});
}

export default Component;
