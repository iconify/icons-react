import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nxnw64b0f.css';
import '../../css/j/jk52f3osi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="nxnw64b0f"/><path class="jk52f3osi"/></g>`,
		"fallback": "akar-icons:lock-off",
	});
}

export default Component;
