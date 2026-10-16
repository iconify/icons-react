import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luddyjg5s.css';
import '../../css/z/z2o7skw1w.css';
import '../../css/y/yhu9-56ni.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luddyjg5s"/><path class="z2o7skw1w"/><path class="yhu9-56ni"/>`,
		"fallback": "energy-icons:phone-incoming-20-bold",
	});
}

export default Component;
