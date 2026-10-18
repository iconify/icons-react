import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/is-3zlbwf.css';
import '../../css/z/z2dqakb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="is-3zlbwf"/><path class="z2dqakb3t"/></g>`,
		"fallback": "vadivam:route",
	});
}

export default Component;
