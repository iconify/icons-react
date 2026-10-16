import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m53sf3b9t.css';
import '../../css/y/ylritbb4d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m53sf3b9t"/><path class="ylritbb4d"/>`,
		"fallback": "energy-icons:tower-section-20-bold",
	});
}

export default Component;
