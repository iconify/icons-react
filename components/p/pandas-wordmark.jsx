import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glc6tuupn.css';
import '../../css/g/gx_0y1b1g.css';
import '../../css/x/xhsp1sb3q.css';
import '../../css/o/o84t4kbli.css';
import '../../css/f/fc64knnzt.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glc6tuupn"/><path class="gx_0y1b1g"/><path class="xhsp1sb3q"/><path class="o84t4kbli"/><path class="fc64knnzt"/>`,
		"fallback": "devicon:pandas-wordmark",
	});
}

export default Component;
