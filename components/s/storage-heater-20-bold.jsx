import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7k-tdrrr.css';
import '../../css/g/g2q5-lbfu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7k-tdrrr"/><path class="g2q5-lbfu"/>`,
		"fallback": "energy-icons:storage-heater-20-bold",
	});
}

export default Component;
