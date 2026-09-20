import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jasi7548e.css';
import '../../css/i/i9c92e16s.css';
import '../../css/h/h9xjmkbrz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="jasi7548e"/><path class="i9c92e16s"/><path class="h9xjmkbrz"/></g>`,
		"fallback": "streamline:search-visual",
	});
}

export default Component;
