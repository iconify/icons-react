import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxqmg7esw.css';
import '../../css/s/s7gdozb6t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxqmg7esw"/><path class="s7gdozb6t"/>`,
		"fallback": "vaadin:lightbulb",
	});
}

export default Component;
