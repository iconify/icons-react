import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-i3y8b7c.css';
import '../../css/e/ecd9gs9sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-i3y8b7c"/><path class="ecd9gs9sn"/>`,
		"fallback": "stash:last-updates-duotone",
	});
}

export default Component;
