import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itdk79b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itdk79b4a"/>`,
		"fallback": "cbi:table-lighting-alt",
	});
}

export default Component;
