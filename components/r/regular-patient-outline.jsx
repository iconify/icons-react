import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gmty8gb8e.css';
import '../../css/s/skyaf6bpd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gmty8gb8e"/><path class="skyaf6bpd"/></g>`,
		"fallback": "healthicons:regular-patient-outline",
	});
}

export default Component;
