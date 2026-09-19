import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6w-3uffp.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6w-3uffp"/>`,
		"fallback": "file-icons:sac",
	});
}

export default Component;
