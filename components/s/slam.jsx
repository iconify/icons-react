import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxq4srb0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxq4srb0j"/>`,
		"fallback": "cbi:slam",
	});
}

export default Component;
