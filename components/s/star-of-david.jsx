import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5nbp-g2f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5nbp-g2f"/>`,
		"fallback": "roentgen:star-of-david",
	});
}

export default Component;
