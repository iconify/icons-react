import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2sapj_7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2sapj_7t"/>`,
		"fallback": "rivet-icons:video-off-solid",
	});
}

export default Component;
