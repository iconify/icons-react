import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obq-4hb7c.css';
import '../../css/x/x6-fnk9uo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obq-4hb7c"/><path clip-rule="evenodd" class="x6-fnk9uo"/></g>`,
		"fallback": "streamline-color:meta-flat",
	});
}

export default Component;
