import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmhfi7b_f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmhfi7b_f"/>`,
		"fallback": "streamline-flex:magic-wand-2",
	});
}

export default Component;
