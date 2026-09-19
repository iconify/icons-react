import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/l6wq4teao.css';
import '../../css/p/p7ix2ibsl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="l6wq4teao"/><path clip-rule="evenodd" class="p7ix2ibsl"/></g>`,
		"fallback": "icon-park:radar-two",
	});
}

export default Component;
