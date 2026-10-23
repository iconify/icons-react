import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sy7bv2b8r.css';
import '../../css/w/w92igubvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sy7bv2b8r"/><path class="w92igubvl"/></g>`,
		"fallback": "vadivam:rocking-chair",
	});
}

export default Component;
