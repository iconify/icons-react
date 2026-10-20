import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eodp9ed2n.css';
import '../../css/r/rfdis-bgk.css';
import '../../css/p/pc88fcihq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eodp9ed2n"/><path class="rfdis-bgk"/><path class="pc88fcihq"/>`,
		"fallback": "energy-icons:joystick-48",
	});
}

export default Component;
