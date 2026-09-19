import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjnwaxkty.css';

const viewBox = {"width":438,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjnwaxkty"/>`,
		"fallback": "file-icons:nomad",
	});
}

export default Component;
