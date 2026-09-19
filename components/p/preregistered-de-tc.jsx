import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-fh7-g-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-fh7-g-b"/>`,
		"fallback": "academicons:preregistered-de-tc",
	});
}

export default Component;
