import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/ghus7smcz.css';
import '../../css/c/cmnf9gv-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ghus7smcz"/><path class="cmnf9gv-t"/></g>`,
		"fallback": "vadivam:notebook-tabs",
	});
}

export default Component;
