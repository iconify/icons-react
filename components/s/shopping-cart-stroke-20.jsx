import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoihmqbaa.css';
import '../../css/l/lx3ia5bzn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoihmqbaa"/><path class="lx3ia5bzn"/>`,
		"fallback": "garden:shopping-cart-stroke-20",
	});
}

export default Component;
