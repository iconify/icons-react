import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf0pmjbgg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf0pmjbgg"/>`,
		"fallback": "pinhead:splash-up-from-water",
	});
}

export default Component;
