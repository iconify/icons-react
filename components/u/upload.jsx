import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch0locc9x.css';
import '../../css/v/vd3n2rbxy.css';
import '../../css/a/al_h_5jub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ch0locc9x"><path class="vd3n2rbxy"/><path class="al_h_5jub"/></g>`,
		"fallback": "flat-color-icons:upload",
	});
}

export default Component;
