import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6r87qy8a.css';
import '../../css/n/nzlrb5bjk.css';
import '../../css/g/g6y5ocbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s6r87qy8a"/><path class="nzlrb5bjk"/><path class="g6y5ocbly"/></g>`,
		"fallback": "tdesign:robot",
	});
}

export default Component;
