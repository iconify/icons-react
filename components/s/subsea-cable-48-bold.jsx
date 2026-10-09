import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0ao8hbvl.css';
import '../../css/s/ssm6s4b0l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0ao8hbvl"/><path class="ssm6s4b0l"/>`,
		"fallback": "energy-icons:subsea-cable-48-bold",
	});
}

export default Component;
