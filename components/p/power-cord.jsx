import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53j2rtlh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s53j2rtlh"/>`,
		"fallback": "icomoon-free:power-cord",
	});
}

export default Component;
