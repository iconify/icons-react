import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lloikpa_g.css';
import '../../css/g/glhuhnb6v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lloikpa_g"/><path class="glhuhnb6v"/>`,
		"fallback": "famicons:power-sharp",
	});
}

export default Component;
