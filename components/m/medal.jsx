import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i99h-_v1d.css';
import '../../css/x/xspkd8upa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i99h-_v1d"/><path class="xspkd8upa"/>`,
		"fallback": "vaadin:medal",
	});
}

export default Component;
