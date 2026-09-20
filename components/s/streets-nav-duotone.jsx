import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a_kkd2brg.css';
import '../../css/g/g73wvxbdb.css';
import '../../css/a/a3cqnpbsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a_kkd2brg"/><path class="g73wvxbdb"/><path class="a3cqnpbsa"/></g>`,
		"fallback": "reicon:streets-nav-duotone",
	});
}

export default Component;
