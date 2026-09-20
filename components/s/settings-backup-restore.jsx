import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmy94ub0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmy94ub0h"/>`,
		"fallback": "mdi:settings-backup-restore",
	});
}

export default Component;
