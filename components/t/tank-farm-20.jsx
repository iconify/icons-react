import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd6f3jb2l.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd6f3jb2l"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:tank-farm-20",
	});
}

export default Component;
