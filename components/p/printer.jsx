import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gbzkhu1we.css';
import '../../css/x/x5suupbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gbzkhu1we"/><path class="x5suupbpy"/></g>`,
		"fallback": "tabler:printer",
	});
}

export default Component;
