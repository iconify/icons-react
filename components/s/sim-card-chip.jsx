import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3un0yblu.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3un0yblu"/>`,
		"fallback": "wpf:sim-card-chip",
	});
}

export default Component;
