import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vioh1v-2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vioh1v-2a"/>`,
		"fallback": "thesvg-color:lion-air",
	});
}

export default Component;
