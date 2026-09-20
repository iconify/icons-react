import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jjxhvebwx.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/q/q23j4vbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jjxhvebwx"/><circle class="rs-d_y_0o"/><path class="q23j4vbes"/></g>`,
		"fallback": "lucide:radio-tower",
	});
}

export default Component;
