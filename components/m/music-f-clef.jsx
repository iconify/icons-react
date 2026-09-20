import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v96dn9r4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v96dn9r4c"/>`,
		"fallback": "mdi:music-f-clef",
	});
}

export default Component;
