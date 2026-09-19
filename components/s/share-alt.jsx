import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at1ih5byr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="at1ih5byr"/>`,
		"fallback": "fa7-solid:share-alt",
	});
}

export default Component;
