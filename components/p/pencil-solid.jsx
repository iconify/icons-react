import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj8hsacgm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj8hsacgm"/>`,
		"fallback": "streamline:pencil-solid",
	});
}

export default Component;
