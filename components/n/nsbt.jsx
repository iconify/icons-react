import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-4pu_zsf.css';
import '../../css/i/iqgs3ioxp.css';
import '../../css/w/wwby37bhl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x-4pu_zsf"/><path class="iqgs3ioxp"/><path class="wwby37bhl"/>`,
		"fallback": "token:nsbt",
	});
}

export default Component;
