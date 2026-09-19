import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cm2clvi6w.css';

const viewBox = {"width":1920,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cm2clvi6w"/>`,
		"fallback": "fa:keyboard-o",
	});
}

export default Component;
