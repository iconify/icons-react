import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jloxq3b0a.css';
import '../../css/t/t01qni1jx.css';
import '../../css/t/ttry_thll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jloxq3b0a"/><path class="t01qni1jx"/><path class="ttry_thll"/></g>`,
		"fallback": "hugeicons:sale-tag-02",
	});
}

export default Component;
