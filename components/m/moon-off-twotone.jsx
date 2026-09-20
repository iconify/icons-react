import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g26hbu.css';
import '../../css/m/m7ka-n.css';
import '../../css/t/t5pxry.css';
import '../../css/c/cg7sdy.css';
import '../../css/b/b5dely.css';
import '../../css/m/msp5td.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGdZHlgcuq"><path class="g26hbu m7ka-n t5pxry"/><path class="cg7sdy g26hbu"/><path class="b5dely g26hbu"/><path class="msp5td oxx-om t5pxry"/></mask></defs><path mask="url(#SVGdZHlgcuq)" class="botfzx"/><path class="gd_4-q msp5td t5pxry"/>`,
		"fallback": "line-md:moon-off-twotone",
	});
}

export default Component;
