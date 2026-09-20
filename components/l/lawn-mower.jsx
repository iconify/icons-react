import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk90e1xta.css';
import '../../css/c/cigxasbbf.css';
import '../../css/r/rkqwqebzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gk90e1xta"/><path class="cigxasbbf"/><path class="rkqwqebzy"/></g>`,
		"fallback": "tabler:lawn-mower",
	});
}

export default Component;
