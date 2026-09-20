import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/podu248gf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="podu248gf"/>`,
		"fallback": "tabler:timeline-event-minus",
	});
}

export default Component;
