import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/faapkia6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="faapkia6v"/>`,
		"fallback": "mingcute:more-4-fill",
	});
}

export default Component;
