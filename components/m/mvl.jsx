import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5i1g5b_t.css';
import '../../css/c/crx0wqnqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5i1g5b_t"/><path class="crx0wqnqh"/>`,
		"fallback": "token:mvl",
	});
}

export default Component;
