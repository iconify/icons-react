import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suk0u9b4j.css';
import '../../css/p/pf11sko1y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suk0u9b4j"/><path class="pf11sko1y"/>`,
		"fallback": "energy-icons:moon-gibbous-20",
	});
}

export default Component;
