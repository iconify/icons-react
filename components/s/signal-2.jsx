import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hal96u7sb.css';
import '../../css/d/dog8fzzjx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hal96u7sb"/><path class="dog8fzzjx"/></g>`,
		"fallback": "glyphs-poly:signal-2",
	});
}

export default Component;
