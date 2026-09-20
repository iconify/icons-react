import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlr1o39qv.css';
import '../../css/c/cg7d2pfom.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlr1o39qv"/><circle class="cg7d2pfom"/>`,
		"fallback": "ooui:user-contributions-ltr",
	});
}

export default Component;
