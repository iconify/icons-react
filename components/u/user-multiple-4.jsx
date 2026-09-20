import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rujwnpbfw.css';
import '../../css/u/u-n_fxiyd.css';
import '../../css/l/l9yn4ydvz.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rujwnpbfw"/><path clip-rule="evenodd" class="u-n_fxiyd"/><path class="l9yn4ydvz"/>`,
		"fallback": "lineicons:user-multiple-4",
	});
}

export default Component;
