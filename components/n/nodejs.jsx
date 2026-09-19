import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrkl4_7zf.css';
import '../../css/p/pc8rfjy_o.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrkl4_7zf"/><path class="pc8rfjy_o"/>`,
		"fallback": "fontisto:nodejs",
	});
}

export default Component;
