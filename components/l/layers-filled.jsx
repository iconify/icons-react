import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xcaua0tov.css';
import '../../css/h/h8815mb5m.css';
import '../../css/e/exyf57_1n.css';
import '../../css/z/zxaq837ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xcaua0tov"/><path clip-rule="evenodd" class="h8815mb5m"/><path class="exyf57_1n"/><path class="zxaq837ci"/></g>`,
		"fallback": "reicon:layers-filled",
	});
}

export default Component;
