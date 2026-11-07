import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx1qmxb2o.css';
import '../../css/j/j05r12o9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx1qmxb2o"/><path class="j05r12o9z"/>`,
		"fallback": "solar:outgoing-call-bold-duotone",
	});
}

export default Component;
