import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ouc14g95t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouc14g95t"/>`,
		"fallback": "mdi:spellcheck",
	});
}

export default Component;
