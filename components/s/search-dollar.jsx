import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hc4a9obbw.css';
import '../../css/d/d-df64e0v.css';
import '../../css/i/i3ozb9bbm.css';
import '../../css/b/b-d7-db4w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hc4a9obbw"/><path class="d-df64e0v"/><path class="i3ozb9bbm"/><path class="b-d7-db4w"/></g>`,
		"fallback": "streamline-color:search-dollar",
	});
}

export default Component;
