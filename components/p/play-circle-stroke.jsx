import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/j/j-hctd9nb.css';
import '../../css/f/fo4ccr_rl.css';
import '../../css/u/u2x12mb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="shu3xdl9q"/><path class="j-hctd9nb"/><path class="fo4ccr_rl"/><path class="u2x12mb1l"/></g>`,
		"fallback": "tdesign:play-circle-stroke",
	});
}

export default Component;
