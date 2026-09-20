import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf1043y0r.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf1043y0r"/>`,
		"fallback": "maki:school-jp-11",
	});
}

export default Component;
