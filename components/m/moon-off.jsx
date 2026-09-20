import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5xdmn.css';
import '../../css/d/dx5bxv.css';
import '../../css/c/c_rqdr.css';
import '../../css/g/g26hbu.css';
import '../../css/x/xhxeiv.css';
import '../../css/d/dynovx.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/s/so-from-56.css';
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
		"content": `<defs><mask id="SVGpOJceeUQ"><path class="c5xdmn dx5bxv"/><path class="c_rqdr g26hbu"/><path class="g26hbu xhxeiv"/><path class="c5xdmn dynovx oxx-om"/></mask></defs><path mask="url(#SVGpOJceeUQ)" class="botfzx"/><path class="c5xdmn dynovx gd_4-q"/>`,
		"fallback": "line-md:moon-off",
	});
}

export default Component;
