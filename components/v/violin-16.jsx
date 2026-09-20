import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rer0iiboj.css';
import '../../css/h/h0qds541f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rer0iiboj"/><path class="h0qds541f"/>`,
		"fallback": "qlementine-icons:violin-16",
	});
}

export default Component;
