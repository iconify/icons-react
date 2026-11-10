import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9knjwb5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9knjwb5t"/>`,
		"fallback": "at-icons:sawtooth-wave",
	});
}

export default Component;
