import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-2-gdbsl.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-2-gdbsl"/>`,
		"fallback": "fa7-solid:music",
	});
}

export default Component;
