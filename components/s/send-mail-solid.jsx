import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/k/kepg3dbmq.css';
import '../../css/l/lvnw5ib3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="kepg3dbmq"/><path class="lvnw5ib3y"/></g>`,
		"fallback": "iconoir:send-mail-solid",
	});
}

export default Component;
