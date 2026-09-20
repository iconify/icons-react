import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehjdnrb9a.css';
import '../../css/d/dc1veeb1p.css';
import '../../css/r/rlin_rb8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehjdnrb9a"/><path class="dc1veeb1p"/><path clip-rule="evenodd" class="rlin_rb8a"/></g>`,
		"fallback": "reicon:password3-duotone",
	});
}

export default Component;
