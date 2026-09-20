import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk16iftaw.css';
import '../../css/m/mu3-fq63x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dk16iftaw"/><path class="mu3-fq63x"/></g>`,
		"fallback": "tabler:settings-star",
	});
}

export default Component;
