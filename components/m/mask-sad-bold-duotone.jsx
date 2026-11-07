import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp-oslbcg.css';
import '../../css/x/x1lrm4okj.css';
import '../../css/w/waeaixbmn.css';
import '../../css/i/ifw1webqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fp-oslbcg"/><path class="x1lrm4okj"/><path class="waeaixbmn"/><path class="ifw1webqj"/>`,
		"fallback": "solar:mask-sad-bold-duotone",
	});
}

export default Component;
