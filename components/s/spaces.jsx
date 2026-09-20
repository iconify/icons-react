import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nk-ja5bdx.css';
import '../../css/d/dfvj5ji8e.css';
import '../../css/b/bf57v-qce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nk-ja5bdx"/><path class="dfvj5ji8e"/><path class="bf57v-qce"/></g>`,
		"fallback": "tabler:spaces",
	});
}

export default Component;
