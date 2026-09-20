import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkih2u7bz.css';
import '../../css/e/e9aqe8bfl.css';
import '../../css/g/gqcy9hz5b.css';
import '../../css/i/is81_p17l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkih2u7bz"/><path clip-rule="evenodd" class="e9aqe8bfl"/><path class="gqcy9hz5b"/><path class="is81_p17l"/></g>`,
		"fallback": "reicon:treadmill-duotone",
	});
}

export default Component;
