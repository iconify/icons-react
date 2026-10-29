import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hy1ec1bya.css';
import '../../css/e/et4f-ub-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hy1ec1bya"/><path class="et4f-ub-n"/></g>`,
		"fallback": "vadivam:rocking-chair",
	});
}

export default Component;
