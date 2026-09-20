import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhh7etb7m.css';
import '../../css/f/f7yw1h3jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhh7etb7m"/><path class="f7yw1h3jk"/>`,
		"fallback": "streamline-freehand:smiley-in-trouble",
	});
}

export default Component;
