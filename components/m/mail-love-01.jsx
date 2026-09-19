import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mz8pfhblh.css';
import '../../css/i/i3m13tbnb.css';
import '../../css/j/jn-_1jb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mz8pfhblh"/><path class="i3m13tbnb"/><path class="jn-_1jb5w"/></g>`,
		"fallback": "hugeicons:mail-love-01",
	});
}

export default Component;
