import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s46vpd6ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s46vpd6ox"/>`,
		"fallback": "mdi:umbrella-closed",
	});
}

export default Component;
