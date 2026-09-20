import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emd7z8bua.css';
import '../../css/g/gx3wvojzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emd7z8bua"/><path class="gx3wvojzk"/></g>`,
		"fallback": "tdesign:user-password",
	});
}

export default Component;
