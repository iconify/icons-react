import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf4qnrbtb.css';
import '../../css/v/vdot4tock.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf4qnrbtb"/><path class="vdot4tock"/>`,
		"fallback": "stash:outbox-light",
	});
}

export default Component;
