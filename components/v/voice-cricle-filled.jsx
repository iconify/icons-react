import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdortxboe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdortxboe"/>`,
		"fallback": "reicon:voice-cricle-filled",
	});
}

export default Component;
