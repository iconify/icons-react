import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj0jfu1wv.css';
import '../../css/d/dx8_z4-2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sj0jfu1wv"/><path class="dx8_z4-2t"/></g>`,
		"fallback": "tabler:sofa",
	});
}

export default Component;
