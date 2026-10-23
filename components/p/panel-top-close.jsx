import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ugjg1xbqf.css';
import '../../css/l/lw5k77b3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ugjg1xbqf"/><path class="lw5k77b3u"/></g>`,
		"fallback": "vadivam:panel-top-close",
	});
}

export default Component;
