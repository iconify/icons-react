import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/utox1qbcx.css';
import '../../css/j/jsoz6_bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="utox1qbcx"/><path class="jsoz6_bak"/></g>`,
		"fallback": "keyline-icons:monitor-duotone",
	});
}

export default Component;
