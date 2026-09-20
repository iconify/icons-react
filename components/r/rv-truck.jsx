import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nrofxzq4j.css';
import '../../css/t/t8tu1tbck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nrofxzq4j"/><path class="t8tu1tbck"/></g>`,
		"fallback": "tabler:rv-truck",
	});
}

export default Component;
