import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4-zldb_l.css';
import '../../css/c/ce5nfeljy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4-zldb_l"/><path class="ce5nfeljy"/></g>`,
		"fallback": "gg:magnet",
	});
}

export default Component;
