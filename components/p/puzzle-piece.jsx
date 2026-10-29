import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywpwovbzl.css';
import '../../css/y/y6255tk5g.css';
import '../../css/v/vcohdmhiw.css';
import '../../css/p/p66700blt.css';
import '../../css/b/b0bfo09xm.css';
import '../../css/x/xksltxbgs.css';
import '../../css/l/l95521bte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow ywpwovbzl"/><path class="y6255tk5g"/><path class="vcohdmhiw"/><path class="p66700blt"/><path class="b0bfo09xm"/><path class="wm-shine xksltxbgs"/><path class="l95521bte"/>`,
		"fallback": "withicons-plush:puzzle-piece",
	});
}

export default Component;
