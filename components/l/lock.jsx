import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/megxpjbnn.css';
import '../../css/n/nxnw64b0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="megxpjbnn"/><rect class="nxnw64b0f"/></g>`,
		"fallback": "meteor-icons:lock",
	});
}

export default Component;
