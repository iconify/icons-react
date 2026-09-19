import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jss3_3pcm.css';
import '../../css/y/ywz4lmofp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jss3_3pcm"/><path class="ywz4lmofp"/></g>`,
		"fallback": "bi:person-rolodex",
	});
}

export default Component;
