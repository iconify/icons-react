import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obco2vbqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obco2vbqt"/>`,
		"fallback": "subway:sound-1",
	});
}

export default Component;
