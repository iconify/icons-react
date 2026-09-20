import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mdghbwq-l.css';
import '../../css/l/lzwn5octs.css';
import '../../css/s/s-ti6ntpp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mdghbwq-l"/><path class="lzwn5octs"/><path class="s-ti6ntpp"/></g>`,
		"fallback": "streamline-plump-color:waving-hand-flat",
	});
}

export default Component;
