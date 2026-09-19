import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2i40wv8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2i40wv8t"/>`,
		"fallback": "academicons:preregistered-tc",
	});
}

export default Component;
