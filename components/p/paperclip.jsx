import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj4vy298y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj4vy298y"/>`,
		"fallback": "uit:paperclip",
	});
}

export default Component;
