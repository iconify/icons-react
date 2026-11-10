import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s1odawxbq.css';
import '../../css/j/jocvj04kx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="s1odawxbq"/><path class="jocvj04kx"/></g>`,
		"fallback": "at-icons:tortoise",
	});
}

export default Component;
