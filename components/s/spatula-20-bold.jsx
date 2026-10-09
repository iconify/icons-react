import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww9p1ok1f.css';
import '../../css/i/iipvbgbrx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww9p1ok1f"/><path class="iipvbgbrx"/>`,
		"fallback": "energy-icons:spatula-20-bold",
	});
}

export default Component;
