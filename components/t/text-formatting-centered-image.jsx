import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhrbr0b3g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhrbr0b3g"/>`,
		"fallback": "streamline-block:text-formatting-centered-image",
	});
}

export default Component;
