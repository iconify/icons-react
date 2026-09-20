import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/y06dk9-zc.css';
import '../../css/t/tfq3at7ug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="y06dk9-zc"/><path class="tfq3at7ug"/></g>`,
		"fallback": "tabler:shoe-off",
	});
}

export default Component;
