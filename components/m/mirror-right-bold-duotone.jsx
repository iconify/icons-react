import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qa5889vlx.css';
import '../../css/a/aa2olkmfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qa5889vlx"/><path clip-rule="evenodd" class="aa2olkmfo"/>`,
		"fallback": "solar:mirror-right-bold-duotone",
	});
}

export default Component;
