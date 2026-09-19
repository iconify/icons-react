import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtcc-ezoq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtcc-ezoq"/>`,
		"fallback": "fa7-solid:lira-sign",
	});
}

export default Component;
