import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzgrz9d2f.css';
import '../../css/j/jmwc4n-6r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzgrz9d2f"/><path class="jmwc4n-6r"/>`,
		"fallback": "energy-icons:ups-20",
	});
}

export default Component;
