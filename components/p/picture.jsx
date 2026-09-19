import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-o8ie_sr.css';
import '../../css/s/s4avfybcx.css';
import '../../css/f/f1s_ru7cj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-o8ie_sr"/><path class="s4avfybcx"/><path class="f1s_ru7cj"/></g>`,
		"fallback": "et:picture",
	});
}

export default Component;
