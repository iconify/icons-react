import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skwlcbjvi.css';
import '../../css/e/ee65gl2ge.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/p/pvz-nrbjs.css';
import '../../css/w/w63jv9baz.css';
import '../../css/l/ll913_fwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="skwlcbjvi"/><path class="ee65gl2ge"/><g class="xtpeb-edw"><path class="pvz-nrbjs"/><path class="w63jv9baz"/><path class="ll913_fwt"/></g>`,
		"fallback": "solar:ufo-2-bold-duotone",
	});
}

export default Component;
