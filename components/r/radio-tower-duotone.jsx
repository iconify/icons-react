import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqwxuxk7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary tqwxuxk7i"/>`,
		"fallback": "iconaut:radio-tower-duotone",
	});
}

export default Component;
