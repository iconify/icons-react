import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_4l3dbra.css';
import '../../css/r/r5t_d6bdj.css';
import '../../css/m/m9x6imbjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_4l3dbra"/><path class="r5t_d6bdj"/><path class="m9x6imbjk"/>`,
		"fallback": "energy-icons:wake-effect-48",
	});
}

export default Component;
