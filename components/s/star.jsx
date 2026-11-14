import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uof6-8apv.css';
import '../../css/v/vx6uoe13q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uof6-8apv"/><path class="vx6uoe13q"/></g>`,
		"fallback": "struq:star",
	});
}

export default Component;
