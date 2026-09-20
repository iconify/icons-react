import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g69dnybiy.css';
import '../../css/l/laavpbc5f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g69dnybiy"/><path class="laavpbc5f"/></g>`,
		"fallback": "tdesign:user-blocked",
	});
}

export default Component;
