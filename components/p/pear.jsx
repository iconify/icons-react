import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2bc_dbqk.css';
import '../../css/l/lg3s6q7pu.css';
import '../../css/p/pohg4abrz.css';
import '../../css/k/ktlo7wbkr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2bc_dbqk"/><path class="lg3s6q7pu"/><path class="pohg4abrz"/><path class="ktlo7wbkr"/>`,
		"fallback": "fxemoji:pear",
	});
}

export default Component;
