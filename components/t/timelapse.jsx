import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni5y2_bcv.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni5y2_bcv"/>`,
		"fallback": "f7:timelapse",
	});
}

export default Component;
