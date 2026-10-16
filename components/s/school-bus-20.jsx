import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmf-m7bxg.css';
import '../../css/b/bcx0b9bfi.css';
import '../../css/h/hnhi0q8cq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmf-m7bxg"/><path class="bcx0b9bfi"/><path class="hnhi0q8cq"/>`,
		"fallback": "energy-icons:school-bus-20",
	});
}

export default Component;
