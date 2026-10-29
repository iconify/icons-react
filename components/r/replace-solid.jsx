import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eg80y9e5s.css';
import '../../css/v/vjaqwph1s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="eg80y9e5s"/><path class="vjaqwph1s wm-a"/></g>`,
		"fallback": "withicons:replace-solid",
	});
}

export default Component;
