import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7ounnd_f.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7ounnd_f"/>`,
		"fallback": "ls:rss",
	});
}

export default Component;
