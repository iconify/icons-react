import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sogtpe2ml.css';
import '../../css/n/nv08k-bvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sogtpe2ml"/><path class="nv08k-bvy"/></g>`,
		"fallback": "streamline-sharp-color:water-drop-1-flat",
	});
}

export default Component;
