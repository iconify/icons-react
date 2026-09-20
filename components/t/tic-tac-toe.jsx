import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h67270lqc.css';
import '../../css/y/ybufkabpo.css';
import '../../css/a/asbceibyx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="h67270lqc"/><circle class="ybufkabpo"/><circle class="asbceibyx"/></g>`,
		"fallback": "lucide:tic-tac-toe",
	});
}

export default Component;
