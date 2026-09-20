import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uvtel8-ja.css';
import '../../css/u/uf4tnbbqf.css';
import '../../css/v/vh8sm6mni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uvtel8-ja"/><path class="uf4tnbbqf"/><path class="vh8sm6mni"/></g>`,
		"fallback": "streamline-freehand-color:settings-hammer",
	});
}

export default Component;
