import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/axmxw95ml.css';
import '../../css/w/wpy3it29h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="axmxw95ml"/><path class="wpy3it29h"/></g>`,
		"fallback": "cryptocurrency-color:nlc2",
	});
}

export default Component;
