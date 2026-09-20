import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az9ugz0fl.css';
import '../../css/g/gs7tczb2w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="az9ugz0fl"/><path clip-rule="evenodd" class="gs7tczb2w"/></g>`,
		"fallback": "skill-icons:prisma",
	});
}

export default Component;
