import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja9e3kqrp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja9e3kqrp"/>`,
		"fallback": "codex:log-out",
	});
}

export default Component;
