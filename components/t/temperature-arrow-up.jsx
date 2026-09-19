import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7mt7bzuu.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7mt7bzuu"/>`,
		"fallback": "fa6-solid:temperature-arrow-up",
	});
}

export default Component;
