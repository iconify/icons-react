import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/flhgcwu9s.css';
import '../../css/z/z10je3sjo.css';
import '../../css/e/eh69lwb0v.css';
import '../../css/a/aeuv7ifjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="flhgcwu9s"/><ellipse class="z10je3sjo"/><path clip-rule="evenodd" class="eh69lwb0v"/><path clip-rule="evenodd" class="aeuv7ifjx"/></g>`,
		"fallback": "reicon:user-speak2-duotone",
	});
}

export default Component;
