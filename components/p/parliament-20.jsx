import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bizml48vp.css';
import '../../css/r/r-vw3obhe.css';
import '../../css/r/rk9-55a5q.css';
import '../../css/p/pycxazbfr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bizml48vp"/><path class="r-vw3obhe"/><path class="rk9-55a5q"/><path class="pycxazbfr"/>`,
		"fallback": "energy-icons:parliament-20",
	});
}

export default Component;
