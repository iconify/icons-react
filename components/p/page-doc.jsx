import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd4fpfb_f.css';
import '../../css/b/b337xtreo.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd4fpfb_f"/><path class="b337xtreo"/>`,
		"fallback": "foundation:page-doc",
	});
}

export default Component;
