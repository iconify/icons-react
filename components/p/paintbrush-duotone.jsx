import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/re31xacew.css';
import '../../css/x/xaqffbcng.css';
import '../../css/y/y6pqfebos.css';
import '../../css/n/n2wq2ypgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="re31xacew"/><path class="xaqffbcng"/><path class="y6pqfebos"/><path class="n2wq2ypgk"/></g>`,
		"fallback": "lucide-extended:paintbrush-duotone",
	});
}

export default Component;
