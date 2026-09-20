import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkz5kod0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkz5kod0a"/>`,
		"fallback": "si:json-alt-2-line",
	});
}

export default Component;
