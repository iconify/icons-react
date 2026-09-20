import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oab43-7av.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oab43-7av"/>`,
		"fallback": "mdi:vespa",
	});
}

export default Component;
