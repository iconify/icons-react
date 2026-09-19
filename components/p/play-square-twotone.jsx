import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/w/we3kj3uua.css';
import '../../css/c/c-bx80bqi.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="we3kj3uua"/><path class="c-bx80bqi"/>`,
		"fallback": "ant-design:play-square-twotone",
	});
}

export default Component;
