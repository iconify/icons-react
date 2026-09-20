import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u59rcgy1q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u59rcgy1q"/>`,
		"fallback": "streamline:spotify-solid",
	});
}

export default Component;
