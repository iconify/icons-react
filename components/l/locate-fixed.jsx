import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/uh9b8ab7s.css';
import '../../css/a/agvr31nlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="uh9b8ab7s"/><path class="agvr31nlx"/></g>`,
		"fallback": "vadivam:locate-fixed",
	});
}

export default Component;
