import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-5f2htjo.css';
import '../../css/y/yq54glb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-5f2htjo"/><path clip-rule="evenodd" class="yq54glb1l"/>`,
		"fallback": "solar:minimalistic-magnifier-close-bold",
	});
}

export default Component;
