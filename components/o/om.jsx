import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh8c8_b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eh8c8_b8p"/>`,
		"fallback": "token:om",
	});
}

export default Component;
