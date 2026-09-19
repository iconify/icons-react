import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nqi5dxbag.css';
import '../../css/g/gzsn_qm0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nqi5dxbag"/><path class="gzsn_qm0g"/></g>`,
		"fallback": "akar-icons:key-cap",
	});
}

export default Component;
