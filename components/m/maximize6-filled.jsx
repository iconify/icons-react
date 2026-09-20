import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqdlajbad.css';
import '../../css/z/z2uzdqbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqdlajbad"/><path class="z2uzdqbem"/></g>`,
		"fallback": "reicon:maximize6-filled",
	});
}

export default Component;
