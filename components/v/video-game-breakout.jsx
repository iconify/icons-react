import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/us3uf0o7r.css';
import '../../css/f/f5_w3wu9l.css';
import '../../css/l/libu0wbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="us3uf0o7r"/><path class="f5_w3wu9l"/><path class="libu0wbyd"/></g>`,
		"fallback": "streamline-freehand-color:video-game-breakout",
	});
}

export default Component;
