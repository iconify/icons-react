import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cm59dmbdn.css';
import '../../css/q/q973-t7va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cm59dmbdn"/><path clip-rule="evenodd" class="q973-t7va"/></g>`,
		"fallback": "streamline-sharp-color:user-protection-1-flat",
	});
}

export default Component;
