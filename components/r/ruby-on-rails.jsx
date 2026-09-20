import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn_s63-uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn_s63-uz"/>`,
		"fallback": "thesvg-color:ruby-on-rails",
	});
}

export default Component;
