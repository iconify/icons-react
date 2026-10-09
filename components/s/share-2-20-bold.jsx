import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hs4tj7b-n.css';
import '../../css/r/rn3p8rbfj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hs4tj7b-n"/><path class="rn3p8rbfj"/>`,
		"fallback": "energy-icons:share-2-20-bold",
	});
}

export default Component;
