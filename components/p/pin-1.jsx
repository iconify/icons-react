import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0pwlk5gi.css';
import '../../css/s/s8wm797cm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0pwlk5gi"/><path class="s8wm797cm"/></g>`,
		"fallback": "streamline-flex-color:pin-1",
	});
}

export default Component;
