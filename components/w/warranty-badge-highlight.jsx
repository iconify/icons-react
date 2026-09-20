import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fn278rt5p.css';
import '../../css/s/ss67y-bve.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fn278rt5p"/><path class="ss67y-bve"/></g>`,
		"fallback": "streamline-flex:warranty-badge-highlight",
	});
}

export default Component;
