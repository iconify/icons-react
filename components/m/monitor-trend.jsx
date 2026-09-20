import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_ud2de9p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_ud2de9p"/>`,
		"fallback": "ix:monitor-trend",
	});
}

export default Component;
