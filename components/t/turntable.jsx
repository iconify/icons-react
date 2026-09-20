import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojt__3bgp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojt__3bgp"/>`,
		"fallback": "pinhead:turntable",
	});
}

export default Component;
