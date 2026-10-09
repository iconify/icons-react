import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjugphbbc.css';
import '../../css/u/u5yldcb3g.css';
import '../../css/f/fip9ksb8z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjugphbbc"/><path class="u5yldcb3g"/><path class="fip9ksb8z"/>`,
		"fallback": "energy-icons:moon-star-48",
	});
}

export default Component;
