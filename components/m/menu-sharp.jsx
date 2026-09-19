import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqbx0oy5s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqbx0oy5s"/>`,
		"fallback": "ion:menu-sharp",
	});
}

export default Component;
