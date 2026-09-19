import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_vif4b2e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_vif4b2e"/>`,
		"fallback": "fa7-solid:microphone-lines-slash",
	});
}

export default Component;
