import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br5n2-bih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br5n2-bih"/>`,
		"fallback": "heroicons-outline:plus-sm",
	});
}

export default Component;
