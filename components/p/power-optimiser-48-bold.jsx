import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxl5_ibwd.css';
import '../../css/w/wx675gush.css';
import '../../css/r/r3c6dl47n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxl5_ibwd"/><path class="wx675gush"/><path class="r3c6dl47n"/>`,
		"fallback": "energy-icons:power-optimiser-48-bold",
	});
}

export default Component;
