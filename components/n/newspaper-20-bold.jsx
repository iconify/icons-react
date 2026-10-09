import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r39i0s06f.css';
import '../../css/m/muoqy1bdf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r39i0s06f"/><path class="muoqy1bdf"/>`,
		"fallback": "energy-icons:newspaper-20-bold",
	});
}

export default Component;
