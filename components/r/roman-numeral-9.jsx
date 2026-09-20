import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r29f78hcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r29f78hcy"/>`,
		"fallback": "mdi:roman-numeral-9",
	});
}

export default Component;
