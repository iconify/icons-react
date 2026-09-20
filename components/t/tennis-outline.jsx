import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2-rifqay.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b2-rifqay"/>`,
		"fallback": "solar:tennis-outline",
	});
}

export default Component;
