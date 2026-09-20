import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auk8xrbke.css';
import '../../css/c/crfykgb5l.css';
import '../../css/f/fzeitcbws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auk8xrbke"/><path class="crfykgb5l"/><path class="fzeitcbws"/></g>`,
		"fallback": "tdesign:lighthouse-1",
	});
}

export default Component;
