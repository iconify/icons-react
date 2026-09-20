import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hiug0vbfi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hiug0vbfi"/>`,
		"fallback": "nimbus:shot",
	});
}

export default Component;
