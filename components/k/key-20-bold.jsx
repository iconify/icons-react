import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgdsozb-t.css';
import '../../css/s/scwdfi6dx.css';
import '../../css/p/pb060eflr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgdsozb-t"/><path class="scwdfi6dx"/><path class="pb060eflr"/>`,
		"fallback": "energy-icons:key-20-bold",
	});
}

export default Component;
