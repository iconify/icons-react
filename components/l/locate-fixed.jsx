import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n496nly6t.css';
import '../../css/a/agvr31nlx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n496nly6t"/><path class="agvr31nlx"/></g>`,
		"fallback": "vadivam:locate-fixed",
	});
}

export default Component;
