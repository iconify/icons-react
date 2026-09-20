import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x388a-7-s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x388a-7-s"/>`,
		"fallback": "streamline:rss-square-solid",
	});
}

export default Component;
