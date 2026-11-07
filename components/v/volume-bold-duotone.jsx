import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxiyspb3j.css';
import '../../css/u/ub_apgbsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wxiyspb3j"/><path class="ub_apgbsd"/>`,
		"fallback": "solar:volume-bold-duotone",
	});
}

export default Component;
