import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zjhyt8fvt.css';
import '../../css/k/kyg223bro.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zjhyt8fvt"/><path class="kyg223bro"/></g>`,
		"fallback": "tabler:palette-off",
	});
}

export default Component;
