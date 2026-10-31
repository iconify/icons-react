import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-7__ob0f.css';
import '../../css/a/a9m3p5bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a-7__ob0f"/><path class="a9m3p5bvt"/></g>`,
		"fallback": "coolicons:tag-duocolor-round",
	});
}

export default Component;
