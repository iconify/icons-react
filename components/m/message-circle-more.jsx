import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mygbtuldy.css';
import '../../css/m/ms95v64br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mygbtuldy"/><path class="ms95v64br"/></g>`,
		"fallback": "hugeicons:message-circle-more",
	});
}

export default Component;
