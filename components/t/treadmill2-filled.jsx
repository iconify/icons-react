import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mkih2u7bz.css';
import '../../css/s/spvqwdb2l.css';
import '../../css/t/td2s06bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mkih2u7bz"/><path clip-rule="evenodd" class="spvqwdb2l"/><path class="td2s06bfd"/></g>`,
		"fallback": "reicon:treadmill2-filled",
	});
}

export default Component;
