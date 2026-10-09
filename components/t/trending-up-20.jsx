import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czalfpt_j.css';
import '../../css/g/g1zbydbwf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czalfpt_j"/><path class="g1zbydbwf"/>`,
		"fallback": "energy-icons:trending-up-20",
	});
}

export default Component;
