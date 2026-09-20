import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqye8l92e.css';
import '../../css/i/i-k36iuif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fqye8l92e"/><path clip-rule="evenodd" class="i-k36iuif"/></g>`,
		"fallback": "streamline-sharp-color:select-all-flat",
	});
}

export default Component;
