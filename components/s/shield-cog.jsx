import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7h5xe7cb.css';
import '../../css/p/pf3ei9b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h7h5xe7cb"/><circle class="pf3ei9b0m"/></g>`,
		"fallback": "lucide:shield-cog",
	});
}

export default Component;
