import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxh0f2bbu.css';
import '../../css/r/rqmkcsbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oxh0f2bbu"/><path class="rqmkcsbdo"/>`,
		"fallback": "lets-icons:upload-light",
	});
}

export default Component;
