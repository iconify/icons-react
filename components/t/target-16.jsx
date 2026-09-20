import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc4ux5b6q.css';
import '../../css/r/ry9w0vp7y.css';
import '../../css/f/fm0qv_wws.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc4ux5b6q"/><path class="ry9w0vp7y"/><path class="fm0qv_wws"/>`,
		"fallback": "qlementine-icons:target-16",
	});
}

export default Component;
