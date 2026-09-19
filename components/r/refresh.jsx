import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v4ing4w0e.css';
import '../../css/j/jqvw4p60w.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v4ing4w0e"/><path class="jqvw4p60w"/>`,
		"fallback": "formkit:refresh",
	});
}

export default Component;
