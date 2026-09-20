import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlbipfbog.css';
import '../../css/y/y2fdeug2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlbipfbog"/><path clip-rule="evenodd" class="y2fdeug2j"/>`,
		"fallback": "qlementine-icons:m4a-16",
	});
}

export default Component;
