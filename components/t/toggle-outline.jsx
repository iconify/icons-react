import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s9xy0ebzg.css';
import '../../css/j/j5xauwbke.css';
import '../../css/i/ir3krzgyh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="s9xy0ebzg"/><path class="j5xauwbke"/><path class="ir3krzgyh"/></g>`,
		"fallback": "teenyicons:toggle-outline",
	});
}

export default Component;
