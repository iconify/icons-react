import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/twruyigrp.css';
import '../../css/j/j4ott5bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="twruyigrp"/><path class="j4ott5bjp"/></g>`,
		"fallback": "tabler:lock-share",
	});
}

export default Component;
