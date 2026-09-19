import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uy-61duhk.css';
import '../../css/m/modq6pbhs.css';
import '../../css/l/lixkakb-i.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uy-61duhk"/><path class="modq6pbhs"/><path class="lixkakb-i"/>`,
		"fallback": "fontisto:redux",
	});
}

export default Component;
