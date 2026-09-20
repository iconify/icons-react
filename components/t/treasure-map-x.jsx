import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eq8bm1t3p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eq8bm1t3p"/>`,
		"fallback": "pinhead:treasure-map-x",
	});
}

export default Component;
