import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r6ldd_b1s.css';
import '../../css/z/zeoqanm5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r6ldd_b1s"/><path class="zeoqanm5c"/></g>`,
		"fallback": "heroicons:speaker-wave-solid",
	});
}

export default Component;
