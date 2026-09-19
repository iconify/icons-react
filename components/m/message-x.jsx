import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzy0c9c2j.css';
import '../../css/e/ebvpmmpdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzy0c9c2j"/><path class="ebvpmmpdq"/>`,
		"fallback": "boxicons:message-x",
	});
}

export default Component;
