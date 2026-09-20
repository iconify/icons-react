import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh4-4ybqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh4-4ybqi"/>`,
		"fallback": "tabler:list-check",
	});
}

export default Component;
