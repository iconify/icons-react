import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bizb7ubav.css';
import '../../css/m/m3tp5udax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bizb7ubav"/><path class="m3tp5udax"/>`,
		"fallback": "streamline-freehand:server-sftp-folder",
	});
}

export default Component;
