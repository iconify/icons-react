import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-5f2htjo.css';
import '../../css/b/by5ahfv2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-5f2htjo"/><path clip-rule="evenodd" class="by5ahfv2m"/>`,
		"fallback": "solar:minimalistic-magnifier-slash-bold",
	});
}

export default Component;
