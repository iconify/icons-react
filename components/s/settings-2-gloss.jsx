import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lryf-jbhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lryf-jbhf"/>`,
		"fallback": "withicons:settings-2-gloss",
	});
}

export default Component;
