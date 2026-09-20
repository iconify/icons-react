import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-xy7fdst.css';
import '../../css/h/hcnon4f5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a-xy7fdst"/><path class="hcnon4f5m"/>`,
		"fallback": "token:swash",
	});
}

export default Component;
