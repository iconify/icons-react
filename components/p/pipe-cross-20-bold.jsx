import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekeuohc1r.css';
import '../../css/s/su_ej-b1h.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekeuohc1r"/><path class="su_ej-b1h"/>`,
		"fallback": "energy-icons:pipe-cross-20-bold",
	});
}

export default Component;
