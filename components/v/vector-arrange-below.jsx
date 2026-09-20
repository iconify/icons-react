import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tia1afx0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tia1afx0v"/>`,
		"fallback": "mdi:vector-arrange-below",
	});
}

export default Component;
