import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ge8cev9ng.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ge8cev9ng"/>`,
		"fallback": "fa7-solid:meh-rolling-eyes",
	});
}

export default Component;
