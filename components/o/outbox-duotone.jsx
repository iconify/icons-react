import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df7pajbkm.css';
import '../../css/n/n6jizwbwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df7pajbkm"/><path class="n6jizwbwn"/>`,
		"fallback": "stash:outbox-duotone",
	});
}

export default Component;
