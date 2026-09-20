import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2plnobuh.css';
import '../../css/j/j7l5zubwl.css';
import '../../css/e/ev-42c_5h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2plnobuh"/><path class="j7l5zubwl"/><path class="ev-42c_5h"/>`,
		"fallback": "streamline-pixel:logo-social-media-old-instagram",
	});
}

export default Component;
