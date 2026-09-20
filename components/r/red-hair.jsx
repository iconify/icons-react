import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/p/pl321tbtd.css';
import '../../css/w/wp2cv8b3n.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v--798y_j.css';
import '../../css/x/x7xunxboa.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><path class="pl321tbtd"/><path class="wp2cv8b3n"/></g><g class="jn8qy4bru"><path class="v--798y_j"/><path class="x7xunxboa"/></g>`,
		"fallback": "openmoji:red-hair",
	});
}

export default Component;
