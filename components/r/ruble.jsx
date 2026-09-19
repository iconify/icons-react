import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/o/o4nkozqud.css';
import '../../css/h/hdz8g6s7d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="o4nkozqud"/><path class="hdz8g6s7d"/>`,
		"fallback": "formkit:ruble",
	});
}

export default Component;
