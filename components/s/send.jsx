import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x7qw9qt5a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x7qw9qt5a"/>`,
		"fallback": "zondicons:send",
	});
}

export default Component;
