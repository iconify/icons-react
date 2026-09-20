import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0txdfblm.css';
import '../../css/g/gj5000b3u.css';
import '../../css/y/yeugq0hgn.css';
import '../../css/z/z10je3sjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a0txdfblm"/><path class="gj5000b3u"/><path class="yeugq0hgn"/><ellipse class="z10je3sjo"/></g>`,
		"fallback": "solar:user-speak-rounded-bold-duotone",
	});
}

export default Component;
