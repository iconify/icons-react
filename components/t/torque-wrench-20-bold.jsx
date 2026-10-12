import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mk1wv8bbc.css';
import '../../css/g/ggz3dxbtl.css';
import '../../css/o/ok4v_yuxa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mk1wv8bbc"/><path class="ggz3dxbtl"/><path class="ok4v_yuxa"/>`,
		"fallback": "energy-icons:torque-wrench-20-bold",
	});
}

export default Component;
