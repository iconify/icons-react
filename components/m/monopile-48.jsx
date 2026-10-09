import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v351mchmy.css';
import '../../css/y/yjcru9-ig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v351mchmy"/><path class="yjcru9-ig"/>`,
		"fallback": "energy-icons:monopile-48",
	});
}

export default Component;
