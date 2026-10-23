import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ayb_45qmw.css';
import '../../css/l/l9g6wuo0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ayb_45qmw"/><path class="l9g6wuo0t"/></g>`,
		"fallback": "vadivam:picture-in-picture-2",
	});
}

export default Component;
