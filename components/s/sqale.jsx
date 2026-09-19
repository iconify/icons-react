import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttn-_-n5x.css';

const viewBox = {"width":1932,"height":701};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttn-_-n5x"/>`,
		"fallback": "ls:sqale",
	});
}

export default Component;
