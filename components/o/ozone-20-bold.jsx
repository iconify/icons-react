import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p92x1lbfk.css';
import '../../css/x/x5bwyrbir.css';
import '../../css/x/xundq6axq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p92x1lbfk"/><path class="x5bwyrbir"/><path class="xundq6axq"/>`,
		"fallback": "energy-icons:ozone-20-bold",
	});
}

export default Component;
