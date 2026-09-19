import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx8adxb6p.css';

const viewBox = {"width":1984,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx8adxb6p"/>`,
		"fallback": "fa:pied-piper-alt",
	});
}

export default Component;
