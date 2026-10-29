import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/opfc4tb7c.css';
import '../../css/a/a32x-wl7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="opfc4tb7c"/><path class="a32x-wl7l"/></g>`,
		"fallback": "vadivam:panel-bottom-open",
	});
}

export default Component;
