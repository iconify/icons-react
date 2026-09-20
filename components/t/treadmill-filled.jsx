import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkih2u7bz.css';
import '../../css/z/zida3eq7f.css';
import '../../css/g/gqcy9hz5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkih2u7bz"/><path clip-rule="evenodd" class="zida3eq7f"/><path class="gqcy9hz5b"/></g>`,
		"fallback": "reicon:treadmill-filled",
	});
}

export default Component;
