import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pehsawbat.css';
import '../../css/d/ds2cqbcxf.css';
import '../../css/o/oa_0zdbgk.css';
import '../../css/h/hi-0jvuox.css';
import '../../css/i/i610--bvb.css';
import '../../css/r/r0puso53d.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pehsawbat"/><path class="ds2cqbcxf"/><path class="oa_0zdbgk"/><path class="hi-0jvuox"/><path class="i610--bvb"/><path class="r0puso53d"/></g>`,
		"fallback": "streamline-stickies-color:snowman-duo",
	});
}

export default Component;
