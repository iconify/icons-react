import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/q/q059p7b3k.css';
import '../../css/y/yibf1fzlj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="q059p7b3k"/><path class="yibf1fzlj"/></g>`,
		"fallback": "reicon:printer5",
	});
}

export default Component;
