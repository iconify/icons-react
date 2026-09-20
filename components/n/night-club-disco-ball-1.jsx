import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3n9mrxup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d3n9mrxup"/>`,
		"fallback": "streamline-freehand:night-club-disco-ball-1",
	});
}

export default Component;
