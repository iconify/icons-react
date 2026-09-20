import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zfqeopbvu.css';
import '../../css/i/imc9g1buu.css';
import '../../css/z/z0dqlcz2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zfqeopbvu"/><path clip-rule="evenodd" class="imc9g1buu"/><path class="z0dqlcz2w"/></g>`,
		"fallback": "reicon:user-laptop-filled",
	});
}

export default Component;
