import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zns1uds0y.css';
import '../../css/m/md286fbip.css';
import '../../css/f/fctgmobhd.css';
import '../../css/w/wb8ftfb4k.css';
import '../../css/g/goyzybcsc.css';
import '../../css/r/rjwz6dbkc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="zns1uds0y"/><g class="md286fbip"><path class="fctgmobhd"/><path class="wb8ftfb4k"/><path class="goyzybcsc"/><path class="rjwz6dbkc"/></g></g>`,
		"fallback": "cryptocurrency-color:uni",
	});
}

export default Component;
