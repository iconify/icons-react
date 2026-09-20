import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5-lonbvr.css';
import '../../css/c/cs_yflpck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5-lonbvr"/><path clip-rule="evenodd" class="cs_yflpck"/>`,
		"fallback": "lineicons:turborepo",
	});
}

export default Component;
