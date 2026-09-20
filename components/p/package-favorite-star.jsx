import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6tjmo3jk.css';
import '../../css/e/ep8g6y8ws.css';
import '../../css/k/kqnw-3b_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="z6tjmo3jk"><path class="ep8g6y8ws"/><path class="kqnw-3b_m"/></g>`,
		"fallback": "streamline-cyber:package-favorite-star",
	});
}

export default Component;
