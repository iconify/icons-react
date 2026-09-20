import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfd1aptvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rfd1aptvv"/>`,
		"fallback": "lineicons:mercedes",
	});
}

export default Component;
