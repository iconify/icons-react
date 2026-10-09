import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxmqlcbnm.css';
import '../../css/o/ot0n8509i.css';
import '../../css/v/vof4c6k-m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxmqlcbnm"/><path class="ot0n8509i"/><path class="vof4c6k-m"/>`,
		"fallback": "energy-icons:motion-sensor-20",
	});
}

export default Component;
