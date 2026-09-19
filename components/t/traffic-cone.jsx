import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq7hs77-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq7hs77-a"/>`,
		"fallback": "at-icons:traffic-cone",
	});
}

export default Component;
