import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r88ackb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r88ackb7z"/>`,
		"fallback": "simple-icons:myspace",
	});
}

export default Component;
