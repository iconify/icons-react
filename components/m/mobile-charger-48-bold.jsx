import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcjo-6bpf.css';
import '../../css/g/gjx6_nbye.css';
import '../../css/f/f9s4ogcoy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcjo-6bpf"/><path class="gjx6_nbye"/><path class="f9s4ogcoy"/>`,
		"fallback": "energy-icons:mobile-charger-48-bold",
	});
}

export default Component;
