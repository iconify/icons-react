import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbfpednqz.css';
import '../../css/z/zl1nmrb8x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbfpednqz"/><path class="zl1nmrb8x"/>`,
		"fallback": "energy-icons:rotor-48-bold",
	});
}

export default Component;
