import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h7w4nh9fc.css';
import '../../css/k/k-y7wkbqg.css';
import '../../css/z/z7kma4b3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="h7w4nh9fc"/><path class="k-y7wkbqg"/><path class="z7kma4b3s"/></g>`,
		"fallback": "withicons:navigation-2-sketch",
	});
}

export default Component;
