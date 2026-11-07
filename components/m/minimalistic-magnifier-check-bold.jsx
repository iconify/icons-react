import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-5f2htjo.css';
import '../../css/o/o19b52bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-5f2htjo"/><path clip-rule="evenodd" class="o19b52bvg"/>`,
		"fallback": "solar:minimalistic-magnifier-check-bold",
	});
}

export default Component;
