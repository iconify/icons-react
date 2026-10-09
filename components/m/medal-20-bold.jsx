import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jf5-4acxm.css';
import '../../css/b/beal5kb9o.css';
import '../../css/i/idlt776qa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jf5-4acxm"/><path class="beal5kb9o"/><path class="idlt776qa"/>`,
		"fallback": "energy-icons:medal-20-bold",
	});
}

export default Component;
