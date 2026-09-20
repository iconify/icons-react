import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8-hkwbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8-hkwbpm"/>`,
		"fallback": "simple-icons:opencollective",
	});
}

export default Component;
