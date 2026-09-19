import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxqk6110f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxqk6110f"/>`,
		"fallback": "heroicons-outline:magnifying-glass-plus",
	});
}

export default Component;
