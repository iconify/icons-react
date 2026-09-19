import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh60tvb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh60tvb1h"/>`,
		"fallback": "griddy-icons:maximize-alt-02",
	});
}

export default Component;
