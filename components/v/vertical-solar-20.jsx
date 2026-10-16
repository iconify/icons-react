import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_nt8zixb.css';
import '../../css/r/r77s4pbmz.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_nt8zixb"/><path class="r77s4pbmz"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:vertical-solar-20",
	});
}

export default Component;
