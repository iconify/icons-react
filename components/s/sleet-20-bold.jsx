import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mlbvg8bgk.css';
import '../../css/a/ax-mmibru.css';
import '../../css/v/vyx3_bcxl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mlbvg8bgk"/><path class="ax-mmibru"/><path class="vyx3_bcxl"/>`,
		"fallback": "energy-icons:sleet-20-bold",
	});
}

export default Component;
