import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1xi8-b3g.css';
import '../../css/m/m4tlw7bnb.css';
import '../../css/z/zoevn-bkx.css';
import '../../css/y/yn9nnjbjj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w1xi8-b3g"/><path class="m4tlw7bnb"/><path class="zoevn-bkx"/><path class="yn9nnjbjj"/></g>`,
		"fallback": "unjs:mdbox",
	});
}

export default Component;
