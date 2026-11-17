import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/skzq3efbt.css';
import '../../css/p/p4ojfpbms.css';
import '../../css/b/bv8sd55gu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="skzq3efbt"/><path class="p4ojfpbms"/><path class="bv8sd55gu"/></g>`,
		"fallback": "matita:paintbrush",
	});
}

export default Component;
