import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvw4ydbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvw4ydbos"/>`,
		"fallback": "reicon:status-filled",
	});
}

export default Component;
