import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtxjgl01m.css';
import '../../css/z/zy3xx9cdd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtxjgl01m"/><path class="zy3xx9cdd"/>`,
		"fallback": "energy-icons:water-butt-20",
	});
}

export default Component;
