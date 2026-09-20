import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvsbw4j5h.css';
import '../../css/c/cuyn6tgcc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGtFnCvbNU" class="vvsbw4j5h"/></defs><use href="#SVGtFnCvbNU" class="cuyn6tgcc"/>`,
		"fallback": "uiw:pie-chart",
	});
}

export default Component;
