import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcism4bdx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcism4bdx"/>`,
		"fallback": "file-icons:json5",
	});
}

export default Component;
