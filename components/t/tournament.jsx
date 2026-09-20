import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oadwttbjx.css';
import '../../css/g/glul-0efb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oadwttbjx"/><path class="glul-0efb"/></g>`,
		"fallback": "tabler:tournament",
	});
}

export default Component;
