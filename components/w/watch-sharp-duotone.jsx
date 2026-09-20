import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4ezfoqsl.css';
import '../../css/e/ew0mwxbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4ezfoqsl"/><path clip-rule="evenodd" class="ew0mwxbvg"/></g>`,
		"fallback": "keyline-icons:watch-sharp-duotone",
	});
}

export default Component;
