import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gob_93b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gob_93b_k"/>`,
		"fallback": "tabler:timeline-event-x",
	});
}

export default Component;
