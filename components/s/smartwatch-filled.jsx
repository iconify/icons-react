import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/ga7px0bcj.css';
import '../../css/t/tv8ramm_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ga7px0bcj"/><path clip-rule="evenodd" class="tv8ramm_a"/></g>`,
		"fallback": "reicon:smartwatch-filled",
	});
}

export default Component;
