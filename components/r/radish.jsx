import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmo1ydb4s.css';
import '../../css/b/bcq-edwaq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mmo1ydb4s"/><path class="bcq-edwaq"/></g>`,
		"fallback": "tdesign:radish",
	});
}

export default Component;
