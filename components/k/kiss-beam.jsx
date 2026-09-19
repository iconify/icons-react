import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsvawhb2d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsvawhb2d"/>`,
		"fallback": "fa7-regular:kiss-beam",
	});
}

export default Component;
