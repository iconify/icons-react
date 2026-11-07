import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dciv8jbgc.css';
import '../../css/z/zo2kgwbhm.css';
import '../../css/h/hd5dgobzc.css';
import '../../css/k/kyfybbbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dciv8jbgc"/><path class="zo2kgwbhm"/><path class="hd5dgobzc"/><path clip-rule="evenodd" class="kyfybbbty"/>`,
		"fallback": "solar:suitcase-tag-bold-duotone",
	});
}

export default Component;
