import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta49vmcof.css';
import '../../css/k/k7ke_eb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta49vmcof"/><path class="k7ke_eb9r"/>`,
		"fallback": "streamline-freehand:smiley-wink",
	});
}

export default Component;
