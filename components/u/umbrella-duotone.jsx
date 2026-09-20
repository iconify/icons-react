import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fxywzziat.css';
import '../../css/v/v1ed60bfu.css';
import '../../css/z/zazslsmwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fxywzziat"/><path clip-rule="evenodd" class="v1ed60bfu"/><path class="zazslsmwn"/></g>`,
		"fallback": "reicon:umbrella-duotone",
	});
}

export default Component;
