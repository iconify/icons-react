import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9v-4bw7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9v-4bw7z"/>`,
		"fallback": "thesvg-color:jina-ai",
	});
}

export default Component;
