import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/j/j19nvizit.css';
import '../../css/j/jknnjjbpj.css';
import '../../css/i/i74mzvbky.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="j19nvizit"/><path class="jknnjjbpj"/><path class="i74mzvbky"/></g>`,
		"fallback": "streamline-stickies-color:mobile-phone",
	});
}

export default Component;
