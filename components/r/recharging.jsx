import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/ml038wbpq.css';
import '../../css/f/fz3glu8co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ml038wbpq"/><path class="fz3glu8co"/></g>`,
		"fallback": "tabler:recharging",
	});
}

export default Component;
