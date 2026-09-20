import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-752u0ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-752u0ug"/>`,
		"fallback": "nrk:quote",
	});
}

export default Component;
