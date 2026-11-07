import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpzqbccsw.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fwjwj61be.css';
import '../../css/h/h7scsrb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vpzqbccsw"/><g class="xtpeb-edw"><path class="fwjwj61be"/><path class="h7scsrb8x"/></g>`,
		"fallback": "solar:station-minimalistic-bold-duotone",
	});
}

export default Component;
