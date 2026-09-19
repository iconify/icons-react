import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cmps53bym.css';
import '../../css/v/vfu_1b34a.css';
import '../../css/a/a0qpe2bov.css';
import '../../css/z/zwovzli5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cmps53bym"/><path class="vfu_1b34a"/><path class="a0qpe2bov"/><path class="zwovzli5u"/></g>`,
		"fallback": "iconoir:repository",
	});
}

export default Component;
