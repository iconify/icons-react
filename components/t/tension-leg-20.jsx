import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l35scy-hf.css';
import '../../css/y/yekygsb-g.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l35scy-hf"/><path class="yekygsb-g"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:tension-leg-20",
	});
}

export default Component;
