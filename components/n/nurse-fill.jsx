import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blhm5fk1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blhm5fk1l"/>`,
		"fallback": "mingcute:nurse-fill",
	});
}

export default Component;
