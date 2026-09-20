import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekyumwb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekyumwb7l"/>`,
		"fallback": "mdi:rewind-30",
	});
}

export default Component;
