import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9w3hdc5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r9w3hdc5p"/>`,
		"fallback": "tabler:signal-4g",
	});
}

export default Component;
