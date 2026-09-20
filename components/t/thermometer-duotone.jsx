import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xkmafkb6z.css';
import '../../css/v/vbs1qgb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xkmafkb6z"/><path class="vbs1qgb2t"/></g>`,
		"fallback": "keyline-icons:thermometer-duotone",
	});
}

export default Component;
