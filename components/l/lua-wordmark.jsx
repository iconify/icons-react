import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdnh22bar.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1vttpb1l.css';
import '../../css/y/y3owh01jo.css';
import '../../css/p/poau05w8s.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdnh22bar"/><g class="cuyn6tgcc"><path class="f1vttpb1l"/><path class="y3owh01jo"/></g><path class="poau05w8s"/>`,
		"fallback": "devicon-plain:lua-wordmark",
	});
}

export default Component;
