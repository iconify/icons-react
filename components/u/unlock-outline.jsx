import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w6f34bfwl.css';
import '../../css/p/pgrv-bcfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w6f34bfwl"/><path clip-rule="evenodd" class="pgrv-bcfp"/>`,
		"fallback": "basil:unlock-outline",
	});
}

export default Component;
