import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/k/ko22q1b9a.css';
import '../../css/m/mx2wlxb7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><circle class="ko22q1b9a"/><path class="mx2wlxb7n"/></g>`,
		"fallback": "akar-icons:person",
	});
}

export default Component;
