import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgu-rub7m.css';

const viewBox = {"width":582,"height":674};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgu-rub7m"/>`,
		"fallback": "ls:myspace",
	});
}

export default Component;
