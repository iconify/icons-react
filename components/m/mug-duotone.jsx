import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ygr4kzk5x.css';
import '../../css/w/wbvi0ucwi.css';
import '../../css/v/vg6w0cbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ygr4kzk5x"/><path clip-rule="evenodd" class="wbvi0ucwi"/><path class="vg6w0cbcl"/></g>`,
		"fallback": "reicon:mug-duotone",
	});
}

export default Component;
