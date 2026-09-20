import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s0co2bgmi.css';
import '../../css/w/wy4um0b5j.css';
import '../../css/c/cvda4g95f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s0co2bgmi"/><path clip-rule="evenodd" class="wy4um0b5j"/><path clip-rule="evenodd" class="cvda4g95f"/></g>`,
		"fallback": "streamline-plump-color:location-pin-3-flat",
	});
}

export default Component;
