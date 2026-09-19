import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp-jn3bbp.css';

const viewBox = {"width":717,"height":690};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp-jn3bbp"/>`,
		"fallback": "ls:pc",
	});
}

export default Component;
