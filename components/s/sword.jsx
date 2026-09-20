import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeorc5t3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeorc5t3b"/>`,
		"fallback": "tabler:sword",
	});
}

export default Component;
