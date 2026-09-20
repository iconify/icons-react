import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt39gtb6i.css';
import '../../css/f/fk2bifb7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt39gtb6i"/><path class="fk2bifb7l"/>`,
		"fallback": "stash:signin-alt",
	});
}

export default Component;
