import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/d/dqzzadq8p.css';
import '../../css/t/ta5mxq58w.css';
import '../../css/u/uddmtkbnk.css';
import '../../css/o/otadbabkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="dqzzadq8p"/><path class="ta5mxq58w"/><path class="uddmtkbnk"/><path class="otadbabkl"/></g>`,
		"fallback": "streamline-sharp-color:rock-and-roll-hand",
	});
}

export default Component;
