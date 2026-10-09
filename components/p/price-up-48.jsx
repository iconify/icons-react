import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1ftczb6h.css';
import '../../css/j/jr9qnkhrr.css';
import '../../css/a/abgd3hbgx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1ftczb6h"/><path class="jr9qnkhrr"/><path class="abgd3hbgx"/>`,
		"fallback": "energy-icons:price-up-48",
	});
}

export default Component;
