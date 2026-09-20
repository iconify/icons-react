import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tvt6t7zoo.css';
import '../../css/h/hfuge5b1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tvt6t7zoo"/><path class="hfuge5b1a"/></g>`,
		"fallback": "streamline-ultimate:light-mode-hdr",
	});
}

export default Component;
