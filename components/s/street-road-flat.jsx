import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzg3gsb0o.css';
import '../../css/w/wmv27pbsg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mzg3gsb0o"/><path clip-rule="evenodd" class="wmv27pbsg"/></g>`,
		"fallback": "streamline-color:street-road-flat",
	});
}

export default Component;
