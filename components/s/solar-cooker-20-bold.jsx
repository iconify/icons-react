import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvqvd8b3b.css';
import '../../css/g/gn4khsb2a.css';
import '../../css/r/rk9itfnss.css';
import '../../css/y/ylz7_1wek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvqvd8b3b"/><path class="gn4khsb2a"/><path class="rk9itfnss"/><path class="ylz7_1wek"/>`,
		"fallback": "energy-icons:solar-cooker-20-bold",
	});
}

export default Component;
