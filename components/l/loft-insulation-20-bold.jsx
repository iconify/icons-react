import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gro8lebrz.css';
import '../../css/w/w05qs9b8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gro8lebrz"/><path class="w05qs9b8k"/>`,
		"fallback": "energy-icons:loft-insulation-20-bold",
	});
}

export default Component;
