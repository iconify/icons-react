import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwci-tmql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwci-tmql"/>`,
		"fallback": "heroicons-outline:menu-alt-1",
	});
}

export default Component;
