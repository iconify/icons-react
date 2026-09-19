import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhfy53brp.css';
import '../../css/m/md286fbip.css';
import '../../css/b/b9lrwlcxy.css';
import '../../css/d/d5816f8fq.css';
import '../../css/v/v11pue_sk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="xhfy53brp"/><g class="md286fbip"><path class="b9lrwlcxy"/><path class="d5816f8fq"/><path class="v11pue_sk"/></g></g>`,
		"fallback": "cryptocurrency-color:ser",
	});
}

export default Component;
