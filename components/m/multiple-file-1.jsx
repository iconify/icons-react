import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/f/fbqjlobpq.css';
import '../../css/e/emwkulbkz.css';
import '../../css/u/u8utqun4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="fbqjlobpq"/><path class="emwkulbkz"/><path class="u8utqun4e"/></g>`,
		"fallback": "streamline-plump:multiple-file-1",
	});
}

export default Component;
