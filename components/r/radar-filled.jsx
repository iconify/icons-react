import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqkkg5bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqkkg5bwh"/>`,
		"fallback": "tabler:radar-filled",
	});
}

export default Component;
