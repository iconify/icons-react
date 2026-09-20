import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mji11bbsx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mji11bbsx"/>`,
		"fallback": "tdesign:line-height",
	});
}

export default Component;
