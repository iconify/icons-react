import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9l22sefq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9l22sefq"/>`,
		"fallback": "mdi:marsupial",
	});
}

export default Component;
