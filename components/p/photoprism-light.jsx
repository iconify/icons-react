import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j71d__mgk.css';

const viewBox = {"width":283.46,"height":283.46};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j71d__mgk"/>`,
		"fallback": "thesvg-color:photoprism-light",
	});
}

export default Component;
