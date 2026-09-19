import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ya4i31b5n.css';
import '../../css/a/a2t9zjllb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ya4i31b5n"/><circle class="a2t9zjllb"/></g>`,
		"fallback": "hugeicons:lake",
	});
}

export default Component;
