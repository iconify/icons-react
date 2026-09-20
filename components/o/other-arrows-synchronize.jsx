import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m29b3obzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m29b3obzd"/>`,
		"fallback": "streamline-block:other-arrows-synchronize",
	});
}

export default Component;
