import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd475mn6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd475mn6t"/>`,
		"fallback": "tabler:message-circle-down",
	});
}

export default Component;
