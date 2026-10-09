import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyerhcb6s.css';
import '../../css/i/iyxqukgcr.css';
import '../../css/s/siwrc_b-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyerhcb6s"/><path class="iyxqukgcr"/><path class="siwrc_b-z"/>`,
		"fallback": "energy-icons:motion-sensor-48",
	});
}

export default Component;
