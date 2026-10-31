import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kct2wnb2f.css';
import '../../css/r/raj_h6ido.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kct2wnb2f"/><path class="raj_h6ido"/></g>`,
		"fallback": "coolicons:thermometer-duotone-round",
	});
}

export default Component;
