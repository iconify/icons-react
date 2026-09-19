import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjdjq9uaw.css';

const viewBox = {"width":417,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjdjq9uaw"/>`,
		"fallback": "file-icons:pegjs",
	});
}

export default Component;
