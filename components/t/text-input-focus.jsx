import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ajpk_ybdp.css';
import '../../css/h/hcy456k9u.css';
import '../../css/s/saia9hbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ajpk_ybdp"/><path class="hcy456k9u"/><path class="saia9hbpx"/></g>`,
		"fallback": "reicon:text-input-focus",
	});
}

export default Component;
