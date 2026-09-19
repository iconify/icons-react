import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb_3d7atl.css';
import '../../css/m/mtfesl_yh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb_3d7atl"/><path class="mtfesl_yh"/>`,
		"fallback": "ion:ios-mic",
	});
}

export default Component;
