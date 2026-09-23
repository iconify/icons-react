import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v1_-mmy7d.css';
import '../../css/m/mnv0b0b0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v1_-mmy7d"/><path class="mnv0b0b0w"/></g>`,
		"fallback": "keyline-icons:search-2-sparkles-fill",
	});
}

export default Component;
