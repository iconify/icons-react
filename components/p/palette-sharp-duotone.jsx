import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1gug98mf.css';
import '../../css/z/ztn2cgbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1gug98mf"/><path class="ztn2cgbyi"/></g>`,
		"fallback": "keyline-icons:palette-sharp-duotone",
	});
}

export default Component;
