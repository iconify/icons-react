import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jps0ekbme.css';
import '../../css/w/w8xhabcyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jps0ekbme"/><path class="w8xhabcyl"/></g>`,
		"fallback": "coolicons:penguin-duocolor-round",
	});
}

export default Component;
