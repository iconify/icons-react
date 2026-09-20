import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjo-1vbvf.css';
import '../../css/l/l-88s82ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjo-1vbvf"/><path class="l-88s82ek"/>`,
		"fallback": "token:ommi",
	});
}

export default Component;
