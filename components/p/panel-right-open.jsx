import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ekvx2_-2l.css';
import '../../css/y/yi3jaj7xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ekvx2_-2l"/><path class="yi3jaj7xh"/></g>`,
		"fallback": "vadivam:panel-right-open",
	});
}

export default Component;
