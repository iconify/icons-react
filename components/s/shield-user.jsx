import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zqeh-wb6x.css';
import '../../css/f/f4bvd6l3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zqeh-wb6x"/><path class="f4bvd6l3z"/></g>`,
		"fallback": "vadivam:shield-user",
	});
}

export default Component;
