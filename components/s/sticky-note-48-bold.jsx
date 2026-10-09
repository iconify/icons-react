import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvvgk1bmy.css';
import '../../css/i/i0j09mbzd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvvgk1bmy"/><path class="i0j09mbzd"/>`,
		"fallback": "energy-icons:sticky-note-48-bold",
	});
}

export default Component;
