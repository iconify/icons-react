import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja0m9bhlu.css';
import '../../css/j/j30cpac7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ja0m9bhlu"/><path class="j30cpac7j"/>`,
		"fallback": "token:tig",
	});
}

export default Component;
