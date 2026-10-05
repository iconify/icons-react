import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e0twvnfzl.css';
import '../../css/l/lstqv8blb.css';
import '../../css/y/yfgq3cchb.css';
import '../../css/x/x5wgfjb0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e0twvnfzl"/><path class="lstqv8blb"/><path class="yfgq3cchb"/><path class="x5wgfjb0q"/></g>`,
		"fallback": "matita:users",
	});
}

export default Component;
