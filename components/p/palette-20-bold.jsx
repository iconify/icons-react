import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gbzbio0ay.css';
import '../../css/p/pbl0q7bew.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gbzbio0ay"/><path class="pbl0q7bew"/>`,
		"fallback": "energy-icons:palette-20-bold",
	});
}

export default Component;
