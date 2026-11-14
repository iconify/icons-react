import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dxo2whbzy.css';
import '../../css/c/c_g8rfbwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dxo2whbzy"/><rect class="c_g8rfbwe"/></g>`,
		"fallback": "struq:thumbs-up",
	});
}

export default Component;
