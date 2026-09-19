import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uq10-mbyx.css';
import '../../css/r/r1mj1gb_e.css';
import '../../css/r/r94vybc5l.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="d2kvgvbvc"><path class="uq10-mbyx"/><path class="r1mj1gb_e"/><path class="r94vybc5l"/></g>`,
		"fallback": "devicon:python-wordmark",
	});
}

export default Component;
