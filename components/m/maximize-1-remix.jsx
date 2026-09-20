import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1xh9tbwm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s1xh9tbwm"/>`,
		"fallback": "streamline-plump:maximize-1-remix",
	});
}

export default Component;
