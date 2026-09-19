import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juzry7bix.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juzry7bix"/>`,
		"fallback": "fa7-solid:recycle",
	});
}

export default Component;
