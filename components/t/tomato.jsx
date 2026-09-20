import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znohwvo6j.css';
import '../../css/v/v1i7tgbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="znohwvo6j"/><path class="v1i7tgbec"/></g>`,
		"fallback": "tdesign:tomato",
	});
}

export default Component;
