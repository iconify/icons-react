import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/upiwdxonc.css';
import '../../css/r/rxftmk89r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="upiwdxonc"/><path class="rxftmk89r"/></g>`,
		"fallback": "coolicons:panel-right-duocolor-round",
	});
}

export default Component;
