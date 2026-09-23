import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzm6dib5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzm6dib5f"/>`,
		"fallback": "tabler:pencil-ai",
	});
}

export default Component;
