import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/foe6t87yf.css';
import '../../css/a/aswlasbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="foe6t87yf"/><path class="aswlasbat"/></g>`,
		"fallback": "tdesign:user-checked-1",
	});
}

export default Component;
