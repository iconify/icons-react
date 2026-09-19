import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/r/ra73nz3sb.css';
import '../../css/g/g59ctu1kl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path clip-rule="evenodd" class="ra73nz3sb"/><path class="g59ctu1kl"/></g>`,
		"fallback": "icon-park:theater",
	});
}

export default Component;
