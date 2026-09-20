import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n416od3sq.css';
import '../../css/s/smfmp7bbr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n416od3sq"/><path class="smfmp7bbr"/>`,
		"fallback": "solar:plaaylist-minimalistic-bold-duotone",
	});
}

export default Component;
