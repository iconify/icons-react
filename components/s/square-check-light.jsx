import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z--u7bblr.css';
import '../../css/k/kfpic71-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z--u7bblr"/><path class="kfpic71-k"/>`,
		"fallback": "stash:square-check-light",
	});
}

export default Component;
